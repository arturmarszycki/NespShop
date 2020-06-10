import React from 'react';

class Input_SerialNumber extends React.Component {
    state = {
        serial_number: ''
    }
    handleSerialNumber = e => {
        this.setState({serial_number: e.target.value});
    }
    render() {
        const {serial_number} = this.state
        return (
            <div>
                <label htmlFor="serial_number">Machine serial number</label>
                {this.props.error_msg && <p><small className="form-warn">{this.props.error_msg}</small></p>}
                <div className="form-input">
                    <input
                        type="text"
                        name="serial_number"
                        id="serial_number"
                        placeholder="XXXXXXXXXXXXXXXXXXX"
                        onChange={this.handleSerialNumber}
                        value={serial_number}
                        onBlur={() => this.props.validateSerialNumber(serial_number)}
                    />
                </div>
                <div className="serial-help">
                    <span onClick={this.props.showSerialInfo}>More information</span>
                </div>
            </div>
        )
    }
}

export default Input_SerialNumber;