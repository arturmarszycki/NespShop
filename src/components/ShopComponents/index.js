import React from 'react';
import Products from './Products';
import Filters from './Filters';
import Cart from './Cart';
import QtyFrame from './Cart/QtyFrame';
import DetailsSet from './DetailsSet';
import TopBar from "../CommonComponents/TopBar";
import Steps from "../CommonComponents/Steps";
import BottomBar from "../CommonComponents/BottomBar";
import ShopActionBar from "./Cart/ShopActionBar";

class ShopWrapper extends React.Component {
    state = {
        item: null,
        cartList: [],
        detailsSet: false,
        detailsQty: false,
        scrolledToBottom: false,
        mobile: false
    }
    showQty = (item, detailsQty) => {
        this.setState({item, detailsQty});
    }
    hideQty = () => {
        this.setState({item: null});
    }
    addToCart = item => {
        this.setState({item: null});
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
    handleResize = () => {
        window.innerWidth < 1200 ? this.setState({mobile: true}) : this.setState({mobile: false});
    }
    componentDidMount() {
        this.props.getData();
        document.addEventListener('scroll', this.trackScrolling);
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        const {item, detailsSet, scrolledToBottom, mobile, detailsQty} = this.state;
        const {shop, type} = this.props;
        const cartItems = shop.filter(item => {
            if (item.qty) {
                return item;
            }
        });
        const totalAmount = cartItems.length && cartItems.map(el => el.qty).reduce((sum, item) => sum += item);
        return (
            <div className={type === 'list' ? 'container grey-bgc' : 'container'} id="wrapper" onClick={this.hideQty}>
                <TopBar />
                <Steps step={2} />
                {type === 'list' ? null : <Filters />}
                <Products type={type} shop={shop} showQty={this.showQty} qty={!mobile && item && item.id_shop_product} addToCart={this.addToCart} mobile={mobile} detailsQty={detailsQty} />
                <Cart items={cartItems} remove={this.removeItem} />
                {mobile && item && <QtyFrame data={item} hideQty={this.hideQty} addToCart={this.addToCart} />}
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