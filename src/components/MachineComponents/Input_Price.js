import React from 'react';

class Input_Price extends React.Component {
    state = {
        price: ''
    }
    handlePrice = e => {
        this.setState({price: e.target.value});
    }
    render() {
        const {price} = this.state
        return (
            <div>
                <label htmlFor="machine_price">Machine price</label>
                {this.props.error_msg && <p><small className="form-warn">{this.props.error_msg}</small></p>}
                <div className="form-input">
                    <input
                        type="number"
                        name="machine_price"
                        id="machine_price"
                        onChange={this.handlePrice}
                        value={price}
                        onBlur={() => this.props.validatePrice(price)}
                    />
                </div>
            </div>
        )
    }
}

export default Input_Price;