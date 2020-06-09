import React from 'react';

class SerialNumberInput extends React.Component {
    state = {
        serial_number: '',
        warning: false
    }
    render() {
        const {serial_number, warning} = this.state
        return (
            <div>
                <label htmlFor="serial_number">Machine serial number</label>
                {warning && <small>warning</small>}
                <div className="form-input">
                    <input
                        type="text"
                        name="serial_number"
                        id="serial_number"
                        placeholder="XXXXXXXXXXXXXXXXXXX"
                        onChange={this.handleSerialNumber}
                        value={serial_number}
                        onBlur={() => this.validateSerialNumber(serial_number)}
                    />
                </div>
                <div className="serial-help">
                    <span onClick={this.props.showSerialInfo}>More information</span>
                </div>
            </div>
        )
    }
}

export default SerialNumberInput;