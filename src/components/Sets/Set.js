import React from 'react';

class Set extends React.Component {
    chooseQty = e => {
        e.stopPropagation();
        this.props.showQty(this.props.data);
    }
    componentDidMount() {
        this.props.getHeight(this.divElement.clientHeight);
    }
    render() {
        const {data, setHeight} = this.props;
        const image = require(`../../images/packet_${data.capsule_count}.png`);
        return (
            <li className="single-set">
                <div className="set-left-part">
                    <img src={image.default} alt="" />
                    <p className="packet-name" style={{height: `${setHeight}px`}} ref={(divElement) => {this.divElement = divElement}}>{data.title}</p>
                </div>
                <div className="set-right-part">
                    <p className="packet-price">&euro;&nbsp;42.50</p>
                    <div className="packet-go-to-details">
                        <span className="btn_details">Details</span>
                    </div>
                    <button className="btn_addToBasket" onClick={this.chooseQty}>
                        {data.qty ?
                            <span className="btn-qty">{data.qty}</span> :
                            <span className="btn_bars">
                                <span className="bar-vertical">{}</span>
                                <span className="bar-horizontal">{}</span>
                            </span>
                        }
                    </button>
                </div>
            </li>
        )
    }
}

export default Set;