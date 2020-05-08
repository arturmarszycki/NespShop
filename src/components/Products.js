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
        if (this.props.shop.length) {
            if (type === 'full') {
                return (
                    <div>
                        <Sets data={this.getSets()} showQty={this.props.showQty} showTree={this.showTree} />
                        <div className="view-desktop">
                            {showTree && <Tree data={this.getCapsules()} showQty={this.props.showQty} />}
                        </div>
                        <div className="view-mobile">
                            {showTree && <List data={this.getCapsules()} showQty={this.props.showQty} />}
                        </div>
                    </div>
                )
            } else if (type === 'tree') {
                return (
                    <div>
                        <div className="view-desktop">
                            <Tree data={this.getCapsules()} showQty={this.props.showQty} />
                        </div>
                        <div className="view-mobile">
                            <List data={this.getCapsules()} showQty={this.props.showQty} />
                        </div>
                    </div>
                )
            } else if (type === 'list') {
                return (
                    <div>
                        <List data={this.getCapsules()} showQty={this.props.showQty} />
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