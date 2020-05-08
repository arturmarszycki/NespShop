import React from 'react';
import Category from './Category';

class Tree extends React.Component {
    state = {
        activeDetailsCategory: null
    }
    scrollTreeRef = React.createRef();
    hideOtherDetails = cat => {
        this.setState({activeDetailsCategory: cat});
    }
    scrollToTree = () => {
        setTimeout(() => {
            window.scrollTo({left: 0, top: this.scrollTreeRef.current.offsetTop, behavior: 'smooth'});
        }, 20);
    }
    componentDidMount() {
        this.scrollToTree();
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
            <div className="panel-tree" ref={this.scrollTreeRef}>
                {list}
            </div>
        )
    }
}

export default Tree;