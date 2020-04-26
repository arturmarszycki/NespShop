import React from 'react';
import Products from './Products';
import Filters from './Filters';
import Cart from "./Cart";
import Qty from "./Cart/Qty";

class Shop extends React.Component {
    state = {
        item: null,
        cartList: [],
        qty: false
    }
    showQty = item => {
        this.setState({qty: true, item});
    }
    hideQty = () => {
        this.setState({qty: false, item: null});
    }
    addToCart = item => {
        this.setState({qty: false});
        this.props.updateShopItem(item);
    }
    removeItem = item => {
        this.props.removeItem(item);
    }
    componentDidMount() {
        this.props.getData();
    }
    render() {
        const {item, qty} = this.state;
        const {shop} = this.props;
        const cartItems = shop.filter(item => {
            if (item.qty) {
                return item;
            }
        });
        return (
            <div className="container">
                <Filters />
                <Products type={this.props.type} shop={this.props.shop} showQty={this.showQty} />
                {cartItems.length ? <Cart items={cartItems} remove={this.removeItem} /> : null}
                {qty && <Qty data={item} hideQty={this.hideQty} addToCart={this.addToCart} />}
            </div>
        )
    }
}

export default Shop;