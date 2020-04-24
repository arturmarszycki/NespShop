import React from 'react';
import Item from './Item';
import '../../styles/Cart/cart.scss';
import equal from 'fast-deep-equal';

class Cart extends React.Component {
    state = {
        cart: []
    }
    componentDidUpdate(prevProps) {
        const {item, addToCart} = this.props;
        if(!equal(item, prevProps.item)) {
            this.setState(prevState => ({cart: [...prevState.cart, item]}))
            addToCart(item);
        }
    }
    render() {
        const {cart} = this.state;
        const list = cart.length && cart.map(item => <Item key={item.id_shop_product} data={item} />);
        return (
            <div className="shopping-cart">
                <ul className="basket">
                    {list}
                </ul>
            </div>
        )
    }
}

export default Cart;