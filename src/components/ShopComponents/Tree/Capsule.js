import React from 'react';
import Qty from '../Cart/Qty';
import '../../../styles/Shop/Tree/capsule.scss';

class Capsule extends React.Component {
    state = {
        data: this.props.data,
        active: true,
        decaffeinated: false,
        qtyBottom: false,
        filters: {
            aromatic_profile: [],
            cup_size: [],
            intensity: []

        }
    }
    showIntensityGraphic = int => {
        let array = [], intensity = int;
        for (let i = 1; i <= 13; i++) {
            let el = intensity > 0 ? <span key={i} className="int-square active-square">{}</span> : <span key={i} className="int-square">{}</span>;
            array.push(el);
            intensity--;
        }
        return array;
    }
    defineType = () => {
        this.state.data.title.includes('Decaffeinato') && this.setState({decaffeinated: true});
    }
    showDetails = async () => {
        await this.setState(prevState => ({data: {...prevState.data, details: true}}), () => this.props.pushDetailsInfo(this.state.data));
        this.props.displayDetails(this.state.data);
    }
    chooseQty = e => {
        e.stopPropagation();
        let qtyBottomState = this.refs.button.getBoundingClientRect().top < 325;
        this.setState({qtyBottom: qtyBottomState});
        this.props.showQty(this.state.data);
    }
    componentDidMount() {
        this.props.getHeight(this.divElement.clientHeight);
        this.defineType();
    }
    render() {
        const {setHeight, data, addToCart, qty} = this.props;
        const {active, decaffeinated, qtyBottom} = this.state;
        const image = require(`../../../images/${data.title}.png`);
        const qtyVisible = qty === data.id_shop_product;
        return (
            <li className="single-capsule">
                <div className={data.details ? 'capsule-inner capsule-active' : 'capsule-inner'} onClick={this.showDetails}>
                    <img src={image.default} alt="" />
                    <p className="cup-name" style={{height: `${setHeight}px`}} ref={(divElement) => {this.divElement = divElement}}>{data.title}</p>
                    <div className="cup-intensity">
                        <span>{data.intensity}</span>
                        <div className="intensity-graphic">{this.showIntensityGraphic(data.intensity)}</div>
                    </div>
                    <p className="cup-price">&euro;&nbsp;0,40</p>
                    <div className="btn_addToBasket" onClick={this.chooseQty} ref="button">
                        {data.qty ?
                            <span className="btn-qty">{data.qty}</span> :
                            <span className="btn_bars">
                                <span className="bar-vertical">{}</span>
                                <span className="bar-horizontal">{}</span>
                            </span>
                        }
                        {qtyVisible && <Qty data={data} addToCart={addToCart} desktop qtyBottom={qtyBottom} />}
                    </div>
                </div>
                {!active && <div className="curtain">{}</div>}
                {decaffeinated && <span className="decaf-circle">{}</span>}
            </li>
        )
    }
}

export default Capsule;