import React from 'react';
import Sets from './Sets';
import Tree from './Tree';
import List from './List';

class Products extends React.Component {
    state = {
        type: this.props.type
    };
    getSets = () => {
        return this.props.shop.filter(item => item.product_type === 'set');
    };
    getCapsules = () => {
        return this.props.shop.filter(item => item.product_type === 'capsule');
    };
    render() {
        const {type} = this.state;
        if (this.props.shop.length) {
            if (type === 'full') {
                return (
                    <div>
                        <Sets data={this.getSets()} showQty={this.props.showQty} />
                        <Tree data={this.getCapsules()} showQty={this.props.showQty} />
                    </div>
                )
            } else if (type === 'tree') {
                return (
                    <div>
                        <Tree data={this.getCapsules()} showQty={this.props.showQty} />
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