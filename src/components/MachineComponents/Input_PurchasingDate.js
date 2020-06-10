import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class Input_PurchasingDate extends React.Component {
    state = {
        purchasing_date: ''
    }
    handleDate = date => {
        this.setState({purchasing_date: date});
        this.props.validatePurchasingDate(date.toLocaleDateString());
    }
    render() {
        const {purchasing_date} = this.state
        return (
            <div>
                <label htmlFor="purchasing_date">Purchasing date</label>
                {this.props.error_msg && <p><small className="form-warn">{this.props.error_msg}</small></p>}
                <div className="form-input">
                    <DatePicker
                        selected={purchasing_date}
                        onChange={this.handleDate}
                        placeholderText="DD/MM/YYYY"
                        maxDate={new Date()}
                        id="purchasing_date"
                        name="purchasing_date"
                    />
                </div>
            </div>
        )
    }
}

export default Input_PurchasingDate;