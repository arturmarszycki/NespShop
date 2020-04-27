import React from 'react';
import '../../styles/List/capsule.scss';
import bagIcon from "../../images/icon_bag.png";
import description from '../Details/description';
import Details from "../Details";
import equal from 'fast-deep-equal';

class Capsule extends React.Component {
    state = {
        active: true,
        decaffeinated: false,
        details: false
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
        this.props.data.title.includes('Decaffeinato') && this.setState({decaffeinated: true});
    }
    toggleDetails = () => {
        this.setState(prevState => ({details: !prevState.details}));
        this.props.hideOtherDetails(this.props.data.id_shop_product);
    }
    closeDetails = () => {
        this.setState({details: false});
    }
    chooseQty = e => {
        e.stopPropagation();
        this.props.showQty(this.props.data);
    }
    componentDidMount() {
        this.defineType();
    }
    componentDidUpdate(prevProps) {
        const {data, activeDetailsCapsule} = this.props;
        if(!equal(activeDetailsCapsule, prevProps.activeDetailsCapsule)) {
            if (activeDetailsCapsule !== data.id_shop_product) {
                this.closeDetails();
            }
        }
    }
    render() {
        const {data, fullData, showQty} = this.props;
        const {decaffeinated, details} = this.state;
        const image = require(`../../images/${data.title}.png`);
        const desc = description.filter(item => item.id === data.id_shop_product)[0];
        return (
            <li className="single-capsule-list">
                <div className={data.details ? 'capsule-inner capsule-active' : 'capsule-inner'} onClick={this.toggleDetails}>
                    <div className="left-part">
                        <div className="img-part">
                            <img src={image.default} alt="" />
                            {decaffeinated && <span className="decaf-circle">{}</span>}
                        </div>
                        <div className="info-part">
                            <p className="cup-name">{data.title}</p>
                            <span className="cup-subtitle">{desc.subtitle}</span>
                            <div className="cup-intensity">
                                <span>{data.intensity}</span>
                                <div className="intensity-graphic">{this.showIntensityGraphic(data.intensity)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="right-part">
                        <span className={details ? 'active-arrow active-details' : 'active-arrow'}>{}</span>
                        <p className="cup-price">&euro;&nbsp;0,40</p>
                        <button onClick={this.chooseQty}>
                            <img src={bagIcon} alt="" />
                            <span className="btn-title">add to basket</span>
                            <span className="btn-add-graphic">
                                {data.qty ?
                                    <span className="btn-qty">{data.qty}</span> :
                                    <span className="btn_bars">
                                        <span className="bar-vertical">{}</span>
                                        <span className="bar-horizontal">{}</span>
                                    </span>
                                }
                            </span>
                        </button>
                    </div>
                </div>
                {details && <Details data={data} hideDetails={this.closeDetails} fullData={fullData} showQty={showQty} basic={true} />}
            </li>
        )
    }
}

export default Capsule;