import React from 'react';
import Category from './Category';
import '../../styles/Tree/tree.scss';

class Tree extends React.Component {
    state = {
        data: this.props.data,
        activeDetailsCategory: null
    }
    hideOtherDetails = cat => {
        this.setState({activeDetailsCategory: cat});
    }
    render() {
        const {data, activeDetailsCategory} = this.state;
        const coffee_IspItaliana = data.filter(item => item.id_shop_category === 9);
        const coffee_BaristaCreations = data.filter(item => item.id_shop_category === 29);
        const coffee_EspressoLungo = data.filter(item => item.id_shop_category === 11);
        const coffee_MasterOrigin = data.filter(item => item.id_shop_category === 12);
        return (
            <div className="panel-tree">
                <Category items={coffee_IspItaliana} fullData={data} hideOtherDetails={this.hideOtherDetails} activeDetailsCategory={activeDetailsCategory} />
                <Category items={coffee_BaristaCreations} fullData={data} hideOtherDetails={this.hideOtherDetails} activeDetailsCategory={activeDetailsCategory} />
                <Category items={coffee_EspressoLungo} fullData={data} hideOtherDetails={this.hideOtherDetails} activeDetailsCategory={activeDetailsCategory} />
                <Category items={coffee_MasterOrigin} fullData={data} hideOtherDetails={this.hideOtherDetails} activeDetailsCategory={activeDetailsCategory} />
            </div>
        )
    }
}

export default Tree;