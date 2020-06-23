import React from 'react';
import Sets from './Sets';
import Tree from './Tree';
import List from './List';

class Products extends React.Component {
    state = {
        type: this.props.type,
        showTree: false,
        mobile: false
    };
    getSets = () => {
        return this.props.shop.filter(item => item.product_type === 'set');
    };
    getCapsules = () => {
        return this.props.shop.filter(item => item.product_type === 'capsule');
    };
    showTree = () => {
        this.setState({showTree: true});
    }
    handleResize = () => {
        window.innerWidth < 1200 ? this.setState({mobile: true}) : this.setState({mobile: false});
    }
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        const {type, showTree, mobile} = this.state;
        const {showQty, addToCart, desktopQty} = this.props;
        if (this.props.shop.length) {
            if (type === 'full') {
                return (
                    <div>
                        <Sets data={this.getSets()} showQty={showQty} showTree={this.showTree} />
                        {showTree && !mobile && <Tree data={this.getCapsules()} showQty={showQty} addToCart={addToCart} desktopQty={desktopQty} />}
                        {showTree && mobile && <List data={this.getCapsules()} showQty={showQty} />}
                    </div>
                )
            } else if (type === 'tree') {
                return (
                    <div>
                        <div className="view-desktop">
                            <Tree data={this.getCapsules()} showQty={showQty} addToCart={addToCart} desktopQty={desktopQty} />
                        </div>
                        <div className="view-mobile">
                            <List data={this.getCapsules()} showQty={showQty} />
                        </div>
                    </div>
                )
            } else if (type === 'list') {
                return (
                    <div>
                        <List data={this.getCapsules()} showQty={showQty} />
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}

export default Products;