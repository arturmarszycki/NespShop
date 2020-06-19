import React from 'react';
import Products from './Products';
import Filters from './Filters';
import Cart from './Cart';
import Qty from './Cart/Qty';
import DetailsSet from './DetailsSet';
import TopBar from "../CommonComponents/TopBar";
import Steps from "../CommonComponents/Steps";
import BottomBar from "../CommonComponents/BottomBar";
import ShopActionBar from "./Cart/ShopActionBar";

class ShopWrapper extends React.Component {
    state = {
        item: null,
        cartList: [],
        qty: false,
        detailsSet: false,
        scrolledToBottom: false
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
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight + 20;
    }
    trackScrolling = () => {
        const wrappedElement = document.getElementById('wrapper');
        if (this.isBottom(wrappedElement)) {
            this.setState({scrolledToBottom: true});
        } else {
            this.setState({scrolledToBottom: false});
        }
    };
    componentDidMount() {
        this.props.getData();
        document.addEventListener('scroll', this.trackScrolling);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
    render() {
        const {item, qty, detailsSet, scrolledToBottom} = this.state;
        const {shop, type} = this.props;
        const cartItems = shop.filter(item => {
            if (item.qty) {
                return item;
            }
        });
        const totalAmount = cartItems.length && cartItems.map(el => el.qty).reduce((sum, item) => sum += item);
        return (
            <div className={type === 'list' ? 'container grey-bgc' : 'container'} id="wrapper">
                <TopBar />
                <Steps step={2} />
                {type === 'list' ? null : <Filters />}
                <Products type={type} shop={shop} showQty={this.showQty} />
                <Cart items={cartItems} remove={this.removeItem} />
                {qty && <Qty data={item} hideQty={this.hideQty} addToCart={this.addToCart} />}
                {detailsSet && <DetailsSet />}
                <div className="active-bottom">
                    <ShopActionBar amount={totalAmount} />
                    {scrolledToBottom && <BottomBar static_a />}
                </div>
            </div>
        )
    }
}

export default ShopWrapper;