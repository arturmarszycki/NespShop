import React from 'react';
import TooltipHelp from "./TooltipHelp";

class Barcode extends React.Component {
    state = {
        tooltip: false,
        image: null
    }
    fileHandler = e => {
        this.setState({image: e.target.files[0]}, () => this.props.startLoader());
    }
    showTooltip = () => {
        this.setState({tooltip: true});
    }
    hideTooltip = () => {
        this.setState({tooltip: false});
    }
    render() {
        const {tooltip} = this.state;
        const img = require('../../images/barcode.png');
        return (
            <div className="barcode">
                <span style={{position: 'relative'}}>
                    <img src={img.default} alt="" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} onClick={() => this.inputElement.click()} />
                    {tooltip && <TooltipHelp msg="Make/upload photo with serial number bar code" />}
                </span>
                <input type="file" name="barcode" id="barcode" onChange={this.fileHandler} style={{visibility: 'hidden'}} accept="image/jpeg,image/png,application/pdf;capture=camera" ref={input => this.inputElement = input} />
            </div>
        )
    }
}

export default Barcode;