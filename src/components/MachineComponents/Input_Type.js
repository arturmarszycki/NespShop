import React from 'react';

class Input_Type extends React.Component {
    state = {
        type: ''
    }
    handleType = e => {
        this.setState({type: e.target.value}, () => this.props.validateType(this.state.type));
    }
    render() {
        const {type} = this.state
        return (
            <div>
                <label htmlFor="type_of_purchase">Point of purchase</label>
                {this.props.error_msg && <p><small className="form-warn">{this.props.error_msg}</small></p>}
                <div className="form-input">
                    <select name="type_of_purchase" id="type_of_purchase" onChange={this.handleType} value={type}>
                        <option selected value="">--- Type of store ---</option>
                        <option value="1">physical store</option>
                        <option value="2">online store</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Input_Type;