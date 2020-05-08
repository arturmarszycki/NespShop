import React from 'react';
import Category from './Category';

class List extends React.Component {
    state = {
        activeDetailsCapsule: null
    }
    scrollRef = React.createRef();
    hideOtherDetails = capsule => {
        this.setState({activeDetailsCapsule: capsule});
    }
    scrollToList = () => {
        window.scrollTo({left: 0, top: this.scrollRef.current.offsetTop, behavior: 'smooth'});
    }
    componentDidMount() {
        this.scrollToList();
    }
    render() {
        const {activeDetailsCapsule} = this.state;
        const {data, showQty} = this.props;
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
                    activeDetailsCapsule={activeDetailsCapsule}
                    showQty={showQty}
                />
            )
        });
        return (
            <div className="panel-list" ref={this.scrollRef}>
                {list}
            </div>
        )
    }
}

export default List;