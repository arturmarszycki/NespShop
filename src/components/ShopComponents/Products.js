import React from 'react';
import Sets from './Sets';
import Tree from './Tree';
import List from './List';

class Products extends React.Component {
    state = {
        type: this.props.type,
        showTree: false
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
    render() {
        const {type, showTree} = this.state;
        const {showQty, addToCart, qty, mobile} = this.props;
        if (this.props.shop.length) {
            if (type === 'full') {
                return (
                    <div>
                        <Sets data={this.getSets()} showQty={showQty} showTree={this.showTree} />
                        {showTree && !mobile && <Tree data={this.getCapsules()} showQty={showQty} addToCart={addToCart} qty={qty} />}
                        {showTree && mobile && <List data={this.getCapsules()} showQty={showQty} />}
                    </div>
                )
            } else if (type === 'tree') {
                return (
                    <div>
                        <div className="view-desktop">
                            <Tree data={this.getCapsules()} showQty={showQty} addToCart={addToCart} qty={qty} />
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