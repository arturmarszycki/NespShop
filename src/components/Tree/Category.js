import React from 'react';
import Capsule from './Capsule';

class Category extends React.Component {
    state = {
        highestValue: null
    }
    array = [];
    getTitlesHeight = height => {
        this.array.push(height);
        let highestValue = Math.max(...this.array);
        this.setState({highestValue});
    }
    render() {
        const {items} = this.props;
        const list = items.map(item => {
            return <Capsule key={item.id_shop_product} data={item} getHeight={this.getTitlesHeight} setHeight={this.state.highestValue} />
        });
        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default Category;