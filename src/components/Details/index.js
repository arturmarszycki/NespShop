import React from 'react';
import '../../styles/details.scss';
import equal from 'fast-deep-equal';
import description from "./description";
import Comparable from './Comparable';

class Details extends React.Component {
    state = {
        active: false,
        decaffeinated: false
    }
    closeDetails = () => {
        this.props.hideDetails();
    }
    defineType = () => {
        this.props.data.title.includes('Decaffeinato') ? this.setState({decaffeinated: true}) : this.setState({decaffeinated: false});
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
    getComparable = () => {
        console.log('');
    }
    componentDidMount() {
        this.defineType();
    }
    componentDidUpdate(prevProps) {
        if(!equal(this.props.data, prevProps.data)) {
            this.defineType();
        }
    }
    render() {
        const {data, fullData} = this.props;
        const image = require(`../../images/${data.title}.png`);
        const desc = description.filter(item => item.id === data.id_shop_product)[0];
        const similarList = data.similar_products.map(product => {
            return product = fullData.filter(item => item.id_shop_product === Number(product))[0];
        });
        return (
            <div className="capsule-details">
                <div className="details-inner">
                    <div className="close-details">
                        <span onClick={this.closeDetails}>x</span>
                    </div>
                    <div className="details-info">
                        <div className="details-graphic">
                            <img src={image.default} alt="" />
                            {this.state.decaffeinated && <span className="decaf-circle">{}</span>}
                        </div>
                        <div className="details-data">
                            <h3 className="capsule-title">{data.title}</h3>
                            <p className="capsule-subtitle">{desc.subtitle}</p>
                            <p className="capsule-desc">{desc.desc}</p>
                            <div className="capsule-info">
                                <div className="capsule-info-point">
                                    <span className="info-label">Intensity:</span>
                                    <div className="info-content cup-intensity">
                                        <span>{data.intensity}</span>
                                        <div className="intensity-graphic">{this.showIntensityGraphic(data.intensity)}</div>
                                    </div>
                                </div>
                                <div className="capsule-info-point">
                                    <span className="info-label">Cup sizes:</span>
                                    <p>{data.cup_size}</p>
                                </div>
                                <div className="capsule-info-point">
                                    <span className="info-label">Comparable coffee profiles:</span>
                                </div>
                                <Comparable list={similarList} />
                            </div>
                        </div>
                        <div className="details-buy"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;