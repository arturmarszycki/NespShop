import React from 'react';
import Capsule from './Capsule';
import Details from "../Details";
import '../../styles/Tree/category.scss';
import equal from 'fast-deep-equal';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            highestValue: null,
            details: null
        };
        this.scrollRef = React.createRef();
    }
    array = [];
    getTitlesHeight = height => {
        this.array.push(height);
        let highestValue = Math.max(...this.array);
        this.setState({highestValue});
    }
    showDetails = capsule => {
        this.setState({details: capsule});
        this.scrollToDetails();
    }
    closeDetails = () => {
        this.setState({details: null});
        this.unmarkCapsule();
    }
    scrollToDetails = () => {
        window.scrollTo({left: 0, top: this.scrollRef.current.offsetTop, behavior: 'smooth'});
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
    unmarkCapsule = () => {
        const items = this.state.items.map(item => {
            item.details = false
            return item;
        });
        this.setState({items});
    }
    componentDidUpdate(prevProps) {
        const {activeDetailsCategory} = this.props;
        if(!equal(activeDetailsCategory, prevProps.activeDetailsCategory)) {
            if (activeDetailsCategory !== this.state.items[0].id_shop_category) {
                this.closeDetails();
                this.unmarkCapsule();
            }
        }
    }
    render() {
        const {items} = this.props;
        const list = items.map(item => {
            return (
                <Capsule
                    key={item.id_shop_product}
                    data={item}
                    getHeight={this.getTitlesHeight}
                    setHeight={this.state.highestValue}
                    displayDetails={this.showDetails}
                    pushDetailsInfo={this.pushDetailsInfo}
                    showQty={this.props.showQty}
                />
            )
        });
        return (
            <div className="category-box" ref={this.scrollRef}>
                <div className="category-box-inner">
                    <div className="category-title">
                        <span>{}</span>
                        <h3>{items[0].coffee_category}</h3>
                    </div>
                    <ul>
                        {list}
                    </ul>
                </div>
                {this.state.details && <Details data={this.state.details} hideDetails={this.closeDetails} fullData={this.props.fullData} showQty={this.props.showQty} />}
            </div>
        )
    }
}

export default Category;