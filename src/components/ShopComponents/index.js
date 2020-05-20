import React from 'react';
import Products from './Products';
import Filters from './Filters';
import Cart from './Cart';
import Qty from './Cart/Qty';
import DetailsSet from './DetailsSet';

class ShopWrapper extends React.Component {
    state = {
        item: null,
        cartList: [],
        qty: false,
        detailsSet: false
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
        const {item, qty, detailsSet} = this.state;
        const {shop, type} = this.props;
        const cartItems = shop.filter(item => {
            if (item.qty) {
                return item;
            }
        });
        return (
            <div className={type === 'list' ? 'container grey-bgc' : 'container'}>
                {type === 'list' ? null : <Filters />}
                <Products type={type} shop={shop} showQty={this.showQty} />
                {cartItems.length ? <Cart items={cartItems} remove={this.removeItem} /> : null}
                {qty && <Qty data={item} hideQty={this.hideQty} addToCart={this.addToCart} />}
                {detailsSet && <DetailsSet />}
            </div>
        )
    }
}

export default ShopWrapper;