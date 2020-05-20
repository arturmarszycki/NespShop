import React from 'react';
import Capsule from './Capsule';
import '../../../styles/Shop/List/category.scss';

class Category extends React.Component {
    render() {
        const {items, fullData, hideOtherDetails, activeDetailsCapsule} = this.props;
        const list = items.map(item => {
            return <Capsule
                key={item.id_shop_product}
                data={item}
                showQty={this.props.showQty}
                fullData={fullData}
                hideOtherDetails={hideOtherDetails}
                activeDetailsCapsule={activeDetailsCapsule}
            />
        });
        return (
            <div className="category-list">
                <div className="category-box-inner">
                    <div className="category-title">
                        <h3>{items[0].coffee_category}</h3>
                    </div>
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category;