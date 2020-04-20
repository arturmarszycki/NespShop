import React from 'react';
import '../../styles/Tree/capsule.scss';
import image from '../../images/capsule.jpg';

class Capsule extends React.Component {
    showIntensityGraphic = (int) => {
        let array = [], intensity = int;
        for (let i = 1; i <= 13; i++) {
            let el = intensity > 0 ? <span key={i} className="int-square active-square">{}</span> : <span key={i} className="int-square">{}</span>;
            array.push(el);
            intensity--;
        }
        return array;
    }
    componentDidMount() {
        this.props.getHeight(this.divElement.clientHeight);
    }
    render() {
        const {data, setHeight} = this.props;
        return (
            <li className="single-capsule">
                <div className="capsule-inner">
                    <img src={image} alt="" />
                    <p className="cup-name" style={{height: `${setHeight}px`}} ref={(divElement) => {this.divElement = divElement}}>{data.title}</p>
                    <div className="cup-intensity">
                        <span>{data.intensity}</span>
                        <div className="intensity-graphic">{this.showIntensityGraphic(data.intensity)}</div>
                    </div>
                    <p className="cup-price">&euro;&nbsp;0,40</p>
                    <button className="btn_addToBasket">
                        <span className="bar-vertical">{}</span>
                        <span className="bar-horizontal">{}</span>
                    </button>
                </div>
            </li>
        )
    }
}

export default Capsule;