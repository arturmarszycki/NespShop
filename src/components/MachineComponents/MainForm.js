import React from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import SerialNumberInput from "./SerialNumberInput";
import FileInput from './FileInput';
import 'react-datepicker/dist/react-datepicker.css';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                serial_number: '',
                purchasing_date: null,
                price: '',
                purchase_proof: null
            },
            warning: {
                serial_number_warn: false,
                purchasing_date_warn: false,
                price_warn: false,
                purchase_proof_warn: false
            }
        };
    }
    setPurchasingDate = date => {
        this.setState(prevState => ({data: {...prevState.data, purchasing_date: date}}));
    }
    addImage = img => {
        this.setState(prevState => ({data: {...prevState.data, purchase_proof: img}}));
    }
    handlePrice = e => {
        e.persist();
        this.setState(prevState => ({data: {...prevState.data, price: e.target.value}}));
    }
    handleSerialNumber = e => {
        e.persist();
        this.setState(prevState => ({data: {...prevState.data, serial_number: e.target.value}}));
    }
    validateSerialNumber = number => {
        if (number !== 'serialklubnespresso') {
            this.setState(prevState => ({warning: {...prevState.warning, serial_number_warn: true}}));
        } else {
            this.setState(prevState => ({warning: {...prevState.warning, serial_number_warn: false}}));
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addMachineInfo(this.state.data);
        this.refs.shopRef.click();
    }
    render() {
        const {purchasing_date, price, serial_number} = this.state.data;
        return (
            <div className="form-machine">
                <div className="form-inner">
                    <h2>machine information</h2>
                    <form action="" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="serial_number">Machine serial number</label>
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
                        <label htmlFor="purchasing_date">Purchasing date</label>
                        <div className="form-input">
                            <DatePicker
                                selected={purchasing_date}
                                onChange={this.setPurchasingDate}
                                placeholderText="DD/MM/YYYY"
                                maxDate={new Date()}
                                id="purchasing_date"
                                name="purchasing_date"
                            />
                        </div>
                        <label htmlFor="machine_price">Machine price</label>
                        <div className="form-input">
                            <input type="number" name="machine_price" id="machine_price" onChange={this.handlePrice} value={price} />
                        </div>
                        <FileInput addImage={this.addImage} />
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