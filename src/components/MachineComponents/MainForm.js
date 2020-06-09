import React from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import FileInput from './FileInput';
import 'react-datepicker/dist/react-datepicker.css';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serial_number: null,
            machine: null,
            purchasing_date: null,
            price: null,
            purchase_proof: null,
        };
    }
    setPurchasingDate = date => {
        this.setState({purchasing_date: date});
    }
    addImage = img => {
        this.setState({purchase_proof: img});
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addMachineInfo(this.state);
        this.refs.shopRef.click();
    }
    render() {
        const {purchasing_date} = this.state;
        return (
            <div className="form-machine">
                <div className="form-inner">
                    <h2>machine information</h2>
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="serial_number">Machine serial number</label>
                        <div className="form-input">
                            <input type="text" name="serial_number" id="serial_number" placeholder="XXXXXXXXXXXXXXXXXXX" />
                        </div>
                        <div className="serial-help">
                            <span onClick={this.props.showSerialInfo}>More information</span>
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
                            <input type="text" name="machine_price" id="machine_price" />
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