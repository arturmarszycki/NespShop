import React from 'react';
import {Link} from 'react-router-dom';
import Input_SerialNumber from "./Input_SerialNumber";
import Input_PurchasingDate from './Input_PurchasingDate';
import Input_Price from './Input_Price';
import Input_Type from './Input_Type';
import Input_Point from './Input_Point';
import Input_City from './Input_City';
import Input_File from './Input_File';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serial_number: '',
            purchasing_date: null,
            price: '',
            type: '',
            point: '',
            city: '',
            purchase_proof: null,
            serial_number_error: '',
            purchasing_date_error: '',
            price_error: '',
            type_error: '',
            purchase_proof_error: ''
        };
    }
    handleSerialNumber = number => {
        this.setState({serial_number: number});
    }
    validateSerialNumber = number => {
        this.handleSerialNumber(number);
        if (number.length !== 19) {
            this.setState({serial_number_error: 'THE SERIAL NUMBER YOU FILLED OUT CONTAINS LESS THAN 19 CHARACTERS, PLEASE CHECK AGAIN BEFORE ENTERING THE NUMBER AGAIN'});
        } else if (number !== 'serialklubnespresso') {
            this.setState({serial_number_error: 'THIS SERIAL IS INCORRECT'});
        } else {
            this.setState({serial_number_error: ''});
        }
    }
    handlePurchasingDate = date => {
        this.setState({purchasing_date: date});
    }
    validatePurchasingDate = date => {
        this.handlePurchasingDate(date);
        if (!date) {
            this.setState({purchasing_date_error: 'PLEASE SELECT'});
        } else {
            this.setState({purchasing_date_error: ''});
        }
    }
    handlePrice = price => {
        this.setState({price});
    }
    validatePrice = price => {
        this.handlePrice(price);
        if (!price) {
            this.setState({price_error: 'THE PRICE IS INCORRECT'});
        } else {
            this.setState({price_error: ''});
        }
    }
    handleType = type => {
        this.setState({type});
    }
    validateType = type => {
        this.handleType(type);
        if (!type) {
            this.setState({type_error: 'SELECT'});
        } else {
            this.setState({type_error: ''});
        }
    }
    handlePoint = point => {
        this.setState({point});
    }
    handleCity = city => {
        this.setState({city});
    }
    handlePurchaseProof = img => {
        this.setState({purchase_proof: img});
    }
    validatePurchaseProof = img => {
        this.handlePurchaseProof(img);
        if (!img) {
            this.setState({purchase_proof_error: 'INCORRECT RECEIPT PHOTO'});
        } else {
            this.setState({purchase_proof_error: ''});
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const {serial_number, purchasing_date, price, type, purchase_proof} = this.state;
        let data = {serial_number, purchasing_date, price, type, purchase_proof};
        if (serial_number && purchasing_date && price && type && purchase_proof) {
            this.props.addMachineInfo(data);
            this.refs.shopRef.click();
        } else {
            if (!serial_number) {
                this.validateSerialNumber(serial_number);
            }
            if (!purchasing_date) {
                this.validatePurchasingDate(purchasing_date);
            }
            if (!price) {
                this.validatePrice(price);
            }
            if (!type) {
                this.validateType(type);
            }
            if (!purchase_proof) {
                this.validatePurchaseProof(purchase_proof);
            }
        }
    }
    render() {
        const {type, point, serial_number_error, purchasing_date_error, price_error, type_error, purchase_proof_error} = this.state;
        return (
            <div className="form-machine">
                <div className="form-inner">
                    <h2>machine information</h2>
                    <form action="" onSubmit={this.handleSubmit}>
                        <Input_SerialNumber showSerialInfo={this.props.showSerialInfo} validateSerialNumber={this.validateSerialNumber} error_msg={serial_number_error} />
                        <Input_PurchasingDate validatePurchasingDate={this.validatePurchasingDate} error_msg={purchasing_date_error} />
                        <Input_Price validatePrice={this.validatePrice} error_msg={price_error} />
                        <Input_Type validateType={this.validateType} error_msg={type_error} />
                        {type && <Input_Point handlePoint={this.handlePoint} />}
                        {point && type !== '2' && <Input_City handleCity={this.handleCity} />}
                        <Input_File validatePurchaseProof={this.validatePurchaseProof} error_msg={purchase_proof_error} />
                        <div className="form-submit-part">
                            <button className="btn_machine_submit">Next</button>
                            <Link to="/choose-products" ref="shopRef">{}</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MainForm;