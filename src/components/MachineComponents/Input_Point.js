import React from 'react';

class Input_Point extends React.Component {
    state = {
        point: ''
    }
    handlePoint = e => {
        this.setState({point: e.target.value}, () => this.props.handlePoint(this.state.point));
    }
    render() {
        const {point} = this.state
        return (
            <div>
                <label htmlFor="point_of_purchase" style={{visibility: 'hidden'}}>Point of purchase</label>
                <div className="form-input">
                    <select name="point_of_purchase" id="point_of_purchase" onChange={this.handlePoint} value={point}>
                        <option selected value="0">--- Point of purchase ---</option>
                        <option value="1">test 1</option>
                        <option value="2">test 2</option>
                        <option value="3">test 3</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Input_Point;