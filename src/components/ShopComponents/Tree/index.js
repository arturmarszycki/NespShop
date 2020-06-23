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
        let ofDist = this.scrollTreeRef.current.offsetTop - 160;
        setTimeout(() => {
            window.scrollTo({left: 0, top: ofDist, behavior: 'smooth'});
        }, 20);
    }
    componentDidMount() {
        this.scrollToTree();
    }
    render() {
        const {activeDetailsCategory} = this.state;
        const {data, showQty, addToCart, desktopQty} = this.props;
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
                    showQty={showQty}
                    addToCart={addToCart}
                    desktopQty={desktopQty}
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