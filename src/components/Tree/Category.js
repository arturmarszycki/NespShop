import React from 'react';
import Capsule from './Capsule';
import Details from "../Details";
import '../../styles/Tree/category.scss';

class Category extends React.Component {
    state = {
        highestValue: null,
        details: null
    }
    array = [];
    getTitlesHeight = height => {
        this.array.push(height);
        let highestValue = Math.max(...this.array);
        this.setState({highestValue});
    }
    showDetails = capsule => {
        this.setState({details: capsule});
    }
    closeDetails = () => {
        this.setState({details: null});
    }
    render() {
        const {items} = this.props;
        const list = items.map(item => {
            return <Capsule key={item.id_shop_product} data={item} getHeight={this.getTitlesHeight} setHeight={this.state.highestValue} displayDetails={this.showDetails} />
        });
        return (
            <div className="category-box">
                <div className="category-box-inner">
                    <div className="category-title">
                        <span>{}</span>
                        <h3>{items[0].coffee_category}</h3>
                    </div>
                    <ul>
                        {list}
                    </ul>
                </div>
                {this.state.details && <Details data={this.state.details} hideDetails={this.closeDetails} fullData={this.props.fullData} />}
            </div>
        )
    }
}

export default Category;