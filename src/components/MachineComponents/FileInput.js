import React from 'react';
import TooltipHelp from "./TooltipHelp";

class FileInput extends React.Component {
    state = {
        image: null,
        image_preview_URL: null,
        tooltip: false
    }
    fileHandler = e => {
        this.setState({image: e.target.files[0]}, () => this.props.addImage(this.state.image.name));
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({image_preview_URL: reader.result});
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    showTooltip = () => {
        this.setState({tooltip: true});
    }
    hideTooltip = () => {
        this.setState({tooltip: false});
    }
    render() {
        const {image_preview_URL, tooltip} = this.state;
        const img = require('../../images/tooltip_label.jpg');
        return (
            <div className="form-input">
                <label htmlFor="purchase_proof">Proof of purchase</label>
                <span className="input-file-apparition" onClick={() => this.inputElement.click()}>
                    <span>Choose a file from your computer</span>
                    <img src={img.default} alt="" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} />
                    {tooltip && <TooltipHelp msg="Please upload a clear photo as the proof of your machine purchase. Make sure it includes, place of purchase, date and machine type. Consider taking a picture of your proof of purchase and upload the PDF." />}
                </span>
                <input
                    type="file"
                    name="purchase_proof"
                    id="purchase_proof"
                    onChange={this.fileHandler}
                    accept="image/png, image/jpeg"
                    style={{visibility: 'hidden'}}
                    ref={input => this.inputElement = input}
                />
                {image_preview_URL && <div className="image-container"><img src={image_preview_URL} alt="" width="300" /></div>}
            </div>
        )
    }
}

export default FileInput;