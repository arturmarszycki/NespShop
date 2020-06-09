import React from 'react';

class FileInput extends React.Component {
    state = {
        image: null,
        image_preview_URL: null
    }
    fileHandler = e => {
        this.setState({image: e.target.files[0]}, () => this.props.addImage(this.state.image));
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({image_preview_URL: reader.result});
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    render() {
        const {image_preview_URL} = this.state;
        return (
            <div className="form-input" style={{marginTop: '30px'}}>
                <input type="file" name="purchase_proof" id="purchase_proof" onChange={this.fileHandler} accept="image/png, image/jpeg" />
                {image_preview_URL && <div className="image-container"><img src={image_preview_URL} alt="" width="300" /></div>}
            </div>
        )
    }
}

export default FileInput;