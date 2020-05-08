import React from 'react';
import Set from './Set';
import '../../styles/Sets/sets.scss';

class Sets extends React.Component {
    state = {
        highestValue: null
    }
    array = [];
    getTitlesHeight = height => {
        this.array.push(height);
        let highestValue = Math.max(...this.array);
        this.setState({highestValue});
    }
    showTree = () => {
        this.props.showTree();
    }
    render() {
        const {data, showQty} = this.props;
        const list = data.map(item => {
            return (
                <Set
                    key={item.id_shop_product}
                    data={item}
                    showQty={showQty}
                    getHeight={this.getTitlesHeight}
                    setHeight={this.state.highestValue}
                />
            )
        });
        const image = require(`../../images/packet_own.png`);
        return (
            <ul className="sets">
                {list}
                <li className="single-set own-set">
                    <div className="set-left-part">
                        <img src={image.default} alt="" />
                        <p className="packet-name">own set</p>
                    </div>
                    <div className="set-right-part">
                        <button className="btn_ownSet" onClick={this.showTree}>compose</button>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Sets;