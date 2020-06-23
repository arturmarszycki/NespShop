import React from 'react';
import Qty from '../Cart/Qty';
import '../../../styles/Shop/Tree/capsule.scss';
import equal from 'fast-deep-equal';

class Capsule extends React.Component {
    state = {
        data: this.props.data,
        active: true,
        decaffeinated: false,
        qty: false,
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
    hideQty = () => {
        this.setState({qty: false});
    }
    chooseQty = e => {
        e.stopPropagation();
        this.setState({qty: true});
        this.props.showQty(this.state.data);
    }
    componentDidMount() {
        this.props.getHeight(this.divElement.clientHeight);
        this.defineType();
    }
    componentDidUpdate(prevProps) {
        const {qty} = this.props;
        if(!equal(qty, prevProps.qty)) {
            this.setState({qty});
        }
    }
    render() {
        const {setHeight, data} = this.props;
        const {active, decaffeinated, qty} = this.state;
        const image = require(`../../../images/${data.title}.png`);
        return (
            <li className="single-capsule">
                <div className={this.state.data.details ? 'capsule-inner capsule-active' : 'capsule-inner'} onClick={this.showDetails}>
                    <img src={image.default} alt="" />
                    <p className="cup-name" style={{height: `${setHeight}px`}} ref={(divElement) => {this.divElement = divElement}}>{data.title}</p>
                    <div className="cup-intensity">
                        <span>{data.intensity}</span>
                        <div className="intensity-graphic">{this.showIntensityGraphic(data.intensity)}</div>
                    </div>
                    <p className="cup-price">&euro;&nbsp;0,40</p>
                    <div className="btn_addToBasket" onClick={this.chooseQty}>
                        {data.qty ?
                            <span className="btn-qty">{data.qty}</span> :
                            <span className="btn_bars">
                                <span className="bar-vertical">{}</span>
                                <span className="bar-horizontal">{}</span>
                            </span>
                        }
                        {qty && <Qty data={data} addToCart={this.props.addToCart} hideQty={this.hideQty} desktop />}
                    </div>
                </div>
                {!active && <div className="curtain">{}</div>}
                {decaffeinated && <span className="decaf-circle">{}</span>}
            </li>
        )
    }
}

export default Capsule;