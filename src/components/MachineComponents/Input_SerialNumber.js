import React from 'react';
import Barcode from './Barcode';
import '../../styles/barcode.css';
import equal from 'fast-deep-equal';

class Input_SerialNumber extends React.Component {
    state = {
        serial_number: '',
        barcode: false,
        backspace: false
    }
    isBackspace = e => {
        if (e.keyCode === 8) {
            this.setState({backspace: true});
        } else {
            this.setState({backspace: false});
        }
    }
    handleSerialNumber = e => {
        if (this.state.serial_number.length < 19 || this.state.backspace) {
            this.setState({serial_number: e.target.value});
        }
    }
    barcodeLoader = () => {
        this.setState({barcode: true}, () => {
            setTimeout(() => {
                this.setState({barcode: false, serial_number: 'serialklubnespresso'}, () => this.props.validateSerialNumber(this.state.serial_number));
            }, 2000);
        });
    }
    componentDidUpdate(prevProps) {
        const {data} = this.props;
        if(!equal(data, prevProps.data)) {
            this.setState({serial_number: data});
        }
    }
    render() {
        const {serial_number, barcode} = this.state
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
                        onKeyDown={this.isBackspace}
                        onChange={this.handleSerialNumber}
                        value={serial_number}
                        onBlur={() => this.props.validateSerialNumber(serial_number)}
                    />
                    <Barcode startLoader={this.barcodeLoader} />
                    {barcode && <div className="barcode-loader">
                        <div className="meter animate">
                            <span style={{width: '100%'}}><span>{}</span></span>
                        </div>
                    </div>}
                </div>
                <div className="serial-help">
                    <span onClick={this.props.showSerialInfo}>More information</span>
                </div>
            </div>
        )
    }
}

export default Input_SerialNumber;