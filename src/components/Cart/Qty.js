import React from 'react';
import '../../styles/Cart/qty.scss';

class Qty extends React.Component {
    state = {
        product: this.props.data,
        decaffeinated: false
    }
    defineType = () => {
        this.props.data.title.includes('Decaffeinato') ? this.setState({decaffeinated: true}) : this.setState({decaffeinated: false});
    };
    showQuantities = type => {
        const capsuleQuantities = [0 ,10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300];
        const setQuantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        if (type === 'capsule') {
            return <ul>{capsuleQuantities.map(qty => <li className="qty-field" key={qty} onClick={() => this.addToBasket(qty)}>{qty}</li>)}</ul>;
        } else if (type === 'set') {
            return <ul>{setQuantities.map(qty => <li className="qty-field" key={qty} onClick={() => this.addToBasket(qty)}>{qty}</li>)}</ul>;
        } else {
            return null;
        }
    }
    hideQty = () => {
        this.props.hideQty();
    }
    addToBasket = qty => {
        this.setState(prevState => ({product: {...prevState.product, qty: qty}}), () => this.props.addToCart(this.state.product));
    }
    componentDidMount() {
        this.defineType();
    }
    render() {
        const {product} = this.state;
        const image = product.product_type === 'capsule' ? require(`../../images/${product.title}.png`) : require(`../../images/packet_${product.capsule_count}.png`);
        return (
            <div className="qty" onClick={this.hideQty}>
                <div className="choose-qty-frame" onClick={e => e.stopPropagation()}>
                    <div className="qty-selected-product">
                        <img src={image.default} alt="" />
                        <p>{product.title}</p>
                        {this.state.decaffeinated && <span className="decaf-circle">{}</span>}
                    </div>
                    <div className="qty-fields">
                        <h5>Choose a quantity</h5>
                        {this.showQuantities(product.product_type)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Qty;