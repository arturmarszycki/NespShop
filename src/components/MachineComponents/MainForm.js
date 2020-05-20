import React from 'react';

class MainForm extends React.Component {
    state = {
        serial_number: null,
        machine: null,
        purchase_date: null,
        price: null
    };
    handleSubmit = () => {
        this.props.addMachineInfo(this.state);
    }
    render() {
        return (
            <div className="form-machine">
                <div className="form-inner">
                    <h2>machine information</h2>
                    <form action="">
                        <label htmlFor="serial_number">Machine serial number</label>
                        <div className="form-input">
                            <input type="text" name="serial_number" />
                        </div>
                        <p></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default MainForm;