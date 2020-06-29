import React from 'react';

class Similar extends React.Component {
    showSimilarDetails = () => {
        this.props.showSimilar(this.props.data);
    }
    render() {
        const {data} = this.props;
        const image = require(`../../../images/${data.title}.png`);
        return (
            <li className="similar-capsule" onClick={this.showSimilarDetails}>
                <div className="similar-capsule-inner">
                    <img src={image.default} alt="" />
                    <p className="cup-name">{data.title}</p>
                </div>
            </li>
        )
    }
}

export default Similar;