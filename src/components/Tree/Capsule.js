import React from 'react';
import '../../styles/Tree/capsule.scss';

class Capsule extends React.Component {
    state = {
        active: true,
        decaffeinated: false,
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
        this.props.data.title.includes('Decaffeinato') && this.setState({decaffeinated: true});
    }
    showDetails = () => {
        this.props.displayDetails(this.props.data);
    }
    componentDidMount() {
        this.props.getHeight(this.divElement.clientHeight);
        this.defineType();
    }
    render() {
        const {data, setHeight} = this.props;
        const image = require(`../../images/${data.title}.png`);
        return (
            <li className="single-capsule">
                <div className="capsule-inner" onClick={this.showDetails}>
                    <img src={image.default} alt="" />
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
                {!this.state.active && <div className="curtain">{}</div>}
                {this.state.decaffeinated && <span className="decaf-circle">{}</span>}
            </li>
        )
    }
}

export default Capsule;