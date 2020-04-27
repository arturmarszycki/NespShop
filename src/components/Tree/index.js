import React from 'react';
import Category from './Category';

class Tree extends React.Component {
    state = {
        activeDetailsCategory: null
    }
    hideOtherDetails = cat => {
        this.setState({activeDetailsCategory: cat});
    }
    render() {
        const {activeDetailsCategory} = this.state;
        const {data} = this.props;
        const categoryArray = [
            data.filter(item => item.id_shop_category === 9),
            data.filter(item => item.id_shop_category === 29),
            data.filter(item => item.id_shop_category === 11),
            data.filter(item => item.id_shop_category === 12)
        ];
        const list = categoryArray.map(cat => {
            return (
                <Category
                    key={cat[0].id_shop_category}
                    items={cat}
                    fullData={data}
                    hideOtherDetails={this.hideOtherDetails}
                    activeDetailsCategory={activeDetailsCategory}
                    showQty={this.props.showQty}
                />
            )
        });
        return (
            <div className="panel-tree">
                {list}
            </div>
        )
    }
}

export default Tree;