import React from 'react';
import Products from './Products';
import Filters from './Filters';
import Cart from "../flow/Cart";
import Qty from "./Cart/Qty";

class Shop extends React.Component {
    state = {
        item: null,
        newProduct: null,
        qty: false
    }
    showQty = item => {
        this.setState({qty: true, item});
    }
    hideQty = () => {
        this.setState({qty: false, item: null});
    }
    addToCart = item => {
        this.setState({newProduct: item, qty: false});
    }
    componentDidMount() {
        this.props.getData();
    }
    render() {
        const {item, newProduct, qty} = this.state;
        return (
            <div className="container">
                <Filters />
                <Products type={this.props.type} shop={this.props.shop} showQty={this.showQty} />
                {newProduct ? <Cart item={newProduct} /> : null}
                {qty && <Qty data={item} hideQty={this.hideQty} addToCart={this.addToCart} />}
            </div>
        )
    }
}

export default Shop;