import React from 'react';
import {Link} from 'react-router-dom';
import Input_SerialNumber from "./Input_SerialNumber";
import Input_PurchasingDate from './Input_PurchasingDate';
import Input_Price from './Input_Price';
import Input_Select from './Input_Select';
import Input_File from './Input_File';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serial_number: '',
            purchasing_date: null,
            price: '',
            select_type: '',
            select_point: '',
            select_city: '',
            purchase_proof: null,
            serial_number_error: '',
            purchasing_date_error: '',
            price_error: '',
            select_error: '',
            purchase_proof_error: '',
            machine_img: false
        };
    }
    typeOptions = [{title: '--- Type of store ---', value: ''}, {title: 'physical store', value: '1'}, {title: 'online store', value: '2'}];
    pointOptions = [{title: '--- Point of purchase ---', value: ''}, {title: 'test 1', value: '1'}, {title: 'test 2', value: '2'}, {title: 'test 3', value: '3'}];
    cityOptions = [{title: '--- City ---', value: ''}, {title: 'city 1', value: '1'}, {title: 'city 2', value: '2'}, {title: 'city 3', value: '3'}];
    handleSerialNumber = number => {
        this.setState({serial_number: number});
    }
    validateSerialNumber = number => {
        this.handleSerialNumber(number);
        if (number.length !== 19) {
            this.setState({serial_number_error: 'THE SERIAL NUMBER YOU FILLED OUT CONTAINS LESS THAN 19 CHARACTERS, PLEASE CHECK AGAIN BEFORE ENTERING THE NUMBER AGAIN', machine_img: false});
        } else if (number !== 'serialklubnespresso') {
            this.setState({serial_number_error: 'THIS SERIAL IS INCORRECT', machine_img: false});
        } else {
            this.setState({serial_number_error: '', machine_img: true});
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
    handleSelect = (type, val) => {
        this.setState({[type]: val});
    }
    validateSelect = (type, val) => {
        this.handleSelect(type, val);
        if (!val) {
            this.setState({select_error: 'INCORRECT SHOP CHOSEN'});
        } else {
            this.setState({select_error: ''});
        }
    }
    handlePurchaseProof = img => {
        this.setState({purchase_proof: img});
    }
    validatePurchaseProof = img => {
        if (!img) {
            this.setState({purchase_proof_error: 'INCORRECT RECEIPT PHOTO'});
            this.handlePurchaseProof(img);
        } else {
            this.setState({purchase_proof_error: ''});
            this.handlePurchaseProof(img);
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const {serial_number, purchasing_date, price, select_type, select_point, select_city, purchase_proof} = this.state;
        let data = {serial_number, purchasing_date, price, select_type, select_point, select_city, purchase_proof};
        if (serial_number && purchasing_date && price && select_type && select_point && purchase_proof) {
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
            if (!select_type) {
                this.validateSelect('select_type', select_type);
            }
            if (!select_point) {
                this.validateSelect('select_point', select_point);
            }
            if (!select_city) {
                this.validateSelect('select_city', select_city);
            }
            if (!purchase_proof) {
                this.validatePurchaseProof(purchase_proof);
            }
        }
    }
    objectNotEmpty = obj => {
        for (let key in obj) {
            if(obj.hasOwnProperty(key)) {
                return true;
            }
        }
        return false;
    }
    componentDidMount() {
        if (this.objectNotEmpty(this.props.machineData)) {
            const {serial_number, purchasing_date, price, select_type, select_point, select_city, purchase_proof} = this.props.machineData;
            this.setState({serial_number, purchasing_date, price, select_type, select_point, select_city, purchase_proof});
        }
    }
    render() {
        const {
            serial_number, purchasing_date, price, select_type, select_point, select_city, purchase_proof,
            serial_number_error, purchasing_date_error, price_error, select_error, purchase_proof_error,
            machine_img
        } = this.state;
        const img = require('../../images/machine.jpg');
        return (
            <div className="form-machine">
                {machine_img && <img className="img-machine" src={img.default} alt=""/>}
                <div className="form-inner">
                    <h2>machine information</h2>
                    <form action="" onSubmit={this.handleSubmit}>
                        <Input_SerialNumber showSerialInfo={this.props.showSerialInfo} validateSerialNumber={this.validateSerialNumber} error_msg={serial_number_error} data={serial_number} />
                        <Input_PurchasingDate validatePurchasingDate={this.validatePurchasingDate} error_msg={purchasing_date_error} data={purchasing_date} />
                        <Input_Price validatePrice={this.validatePrice} error_msg={price_error} data={price} />
                        <Input_Select handleSelect={this.validateSelect} error_msg={select_error} select_title="select_type" options={this.typeOptions} data={select_type} />
                        {select_type && <Input_Select handleSelect={this.validateSelect} select_title="select_point" options={this.pointOptions} data={select_point} />}
                        {select_type && select_point && select_type !== '2' && <Input_Select handleSelect={this.validateSelect} select_title="select_city" options={this.cityOptions} data={select_city} />}
                        <Input_File validatePurchaseProof={this.validatePurchaseProof} error_msg={purchase_proof_error} data={purchase_proof} />
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