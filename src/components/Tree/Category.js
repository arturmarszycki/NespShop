import React from 'react';
import Capsule from './Capsule';
import Details from "../Details";
import '../../styles/Tree/category.scss';
import equal from 'fast-deep-equal';

class Category extends React.Component {
    state = {
        items: this.props.items,
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
    pushDetailsInfo = el => {
        const items = this.state.items.map(item => {
            if (item.id_shop_product === el.id_shop_product) {
                return el;
            } else {
                item.details = false
                return item;
            }
        });
        this.setState({items});
        this.props.hideOtherDetails(this.state.items[0].id_shop_category);
    }
    componentDidUpdate(prevProps) {
        const {activeDetailsCategory} = this.props;
        if(!equal(activeDetailsCategory, prevProps.activeDetailsCategory)) {
            if (activeDetailsCategory !== this.state.items[0].id_shop_category) {
                this.closeDetails();
                const items = this.state.items.map(item => {
                    item.details = false
                    return item;
                });
                this.setState({items});
            }
        }
    }
    render() {
        const {items} = this.state;
        const list = items.map(item => {
            return <Capsule
                key={item.id_shop_product}
                data={item}
                getHeight={this.getTitlesHeight}
                setHeight={this.state.highestValue}
                displayDetails={this.showDetails}
                pushDetailsInfo={this.pushDetailsInfo}
            />
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