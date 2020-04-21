import React from 'react';
import Products from './Products';
import Filters from './Filters';

class Shop extends React.Component {
    componentDidMount() {
        this.props.getData();
    }
    render() {
        return (
            <div className="container">
                <Filters />
                <Products type={this.props.type} shop={this.props.shop} />
            </div>
        )
    }
}

export default Shop;