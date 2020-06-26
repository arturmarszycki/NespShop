import React from 'react';

class Qty extends React.Component {
    state = {
        product: this.props.data,
        yourQty: '',
        qty_error: false
    }
    showQuantities = type => {
        const capsuleQuantities = [0 ,10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300];
        const setQuantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        if (type === 'capsule') {
            return <ul className="qty-list">{capsuleQuantities.map(qty => <li className="qty-field" key={qty} onClick={() => this.addToBasket(qty)}>{qty}</li>)}</ul>;
        } else if (type === 'set') {
            return <ul className="qty-list">{setQuantities.map(qty => <li className="qty-field" key={qty} onClick={() => this.addToBasket(qty)}>{qty}</li>)}</ul>;
        } else {
            return null;
        }
    }
    handleQty = e => {
        this.setState({yourQty: e.target.value});
    }
    yourQtySubmit = e => {
        e.preventDefault();
        const {yourQty} = this.state;
        if (Number(yourQty) >= 0 && Number(yourQty) <= 2000 && Number(yourQty) % 10 === 0) {
            this.addToBasket(Number(yourQty));
            this.setState({qty_error: false});
        } else {
            this.setState({qty_error: true});
        }
    }
    addToBasket = qty => {
        this.setState(prevState => ({product: {...prevState.product, qty: qty}}), () => {
            this.props.addToCart(this.state.product);
        });
    }
    defineClasses = () => {
        const {desktop, qtyBottom} = this.props;
        if (desktop) {
            if (qtyBottom) {
                return 'choose-qty-frame desktop-frame position-bottom';
            } else {
                return 'choose-qty-frame desktop-frame';
            }
        } else {
            return 'choose-qty-frame';
        }
    }
    render() {
        const {product, yourQty, qty_error} = this.state;
        return (
            <div className={this.defineClasses()} onClick={e => e.stopPropagation()}>
                <div className="qty-fields">
                    {this.showQuantities(product.product_type)}
                </div>
                <div className="qty-your-number">
                    <form action="" onSubmit={this.yourQtySubmit}>
                        <input type="number" onChange={this.handleQty} value={yourQty} placeholder="Choose quantity" className={qty_error ? 'qty-error' : ''} />
                        <button>ok</button>
                    </form>
                </div>
                <span className="qty-arrow">{}</span>
            </div>
        )
    }
}

export default Qty;