import React from 'react';
import Item from './Item';
import '../../../styles/Shop/Cart/cart.scss';

class Cart extends React.Component {
    render() {
        const {items, remove} = this.props;
        const list = items.map(item => <Item key={item.id_shop_product} data={item} remove={remove} />);
        const cartSum = items.length && items.map(item => {
            return item.product_type === 'capsule' ? item.qty * 0.4 : item.qty * 42.5
        }).reduce((sum, item) => sum += item);
        return (
            <div className="shopping-cart">
                <div className="basket-entry">
                    <h5>your basket</h5>
                </div>
                <div className="basket-full">
                    {items.length ? <ul className="basket">
                        <li>
                            <div className="cart-item-name">&nbsp;</div>
                            <div className="cart-item-info">
                                <span className="cart-item-amount">Amount</span>
                                <span className="cart-item-quantity">Quantity</span>
                                <span className="cart-item-price">Total</span>
                            </div>
                        </li>
                        {list}
                    </ul> : <span className="basket-empty">The basket is empty</span>}
                    <div className="basket-sum">
                        <span>Total:</span>
                        <span className="cart-sum">&euro;&nbsp;{cartSum}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;