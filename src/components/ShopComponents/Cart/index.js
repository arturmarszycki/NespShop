import React from 'react';
import Item from './Item';
import '../../../styles/Shop/Cart/cart.scss';

class Cart extends React.Component {
    state = {
        full: false
    }
    basketView = () => {
        this.setState(prevState => ({full: !prevState.full}));
    }
    render() {
        const {items, remove} = this.props;
        const {full} = this.state;
        const list = items.length && items.map(item => <Item key={item.id_shop_product} data={item} remove={remove} />);
        const cartSum = items.length && items.map(item => {
            return item.product_type === 'capsule' ? item.qty * 0.4 : item.qty * 42.5
        }).reduce((sum, item) => sum += item);
        return (
            <div className="shopping-cart">
                {!full && <div className="basket-entry" onClick={this.basketView}>
                    <h5>Shopping cart</h5>
                    <div>
                        <p>products: {items.length}</p>
                        <p className="basket-sum">sum: <span>&euro;&nbsp;{cartSum}</span></p>
                    </div>
                </div>}
                {full && <div className="basket-full">
                    <div className="btn_basket_min">
                        <span onClick={this.basketView}>{}</span>
                    </div>
                    <ul className="basket">
                        {list}
                    </ul>
                    <div className="basket-sum">
                        <span>Sum:</span>
                        <span className="cart-sum">&euro;&nbsp;{cartSum}</span>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Cart;