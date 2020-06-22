import React from 'react';
import equal from 'fast-deep-equal';

class Input_Select extends React.Component {
    state = {
        select_value: ''
    }
    handleSelect = e => {
        this.setState({select_value: e.target.value}, () => this.props.handleSelect(this.props.select_title, this.state.select_value));
    }
    componentDidUpdate(prevProps) {
        const {data} = this.props;
        if(!equal(data, prevProps.data)) {
            this.setState({select_value: data});
        }
    }
    render() {
        const {select_value} = this.state
        const {select_title, error_msg, options} = this.props;
        const selectOptions = options.map((el, index) => {
            return (
                index === 0 ? <option key={index} defaultValue value={el.value}>{el.title}</option> : <option key={index} value={el.value}>{el.title}</option>
            )
        });
        return (
            <div>
                {select_title === 'select_type' && <label htmlFor={select_title}>Point of purchase</label>}
                {error_msg && <p><small className="form-warn">{error_msg}</small></p>}
                <div className="form-input">
                    <select name={select_title} id={select_title} onChange={this.handleSelect} value={select_value}>
                        {selectOptions}
                    </select>
                </div>
            </div>
        )
    }
}

export default Input_Select;