import React from 'react';

class Input_City extends React.Component {
    state = {
        city: ''
    }
    handleCity = e => {
        this.setState({city: e.target.value}, () => this.props.handleCity(this.state.city));
    }
    render() {
        const {city} = this.state;
        return (
            <div>
                <label htmlFor="city_of_purchase" style={{visibility: 'hidden'}}>Point of purchase</label>
                <div className="form-input">
                    <select name="city_of_purchase" id="city_of_purchase" onChange={this.handleCity} value={city}>
                        <option selected value="0">--- City ---</option>
                        <option value="1">city 1</option>
                        <option value="2">city 2</option>
                        <option value="3">city 3</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Input_City;