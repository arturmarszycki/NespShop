import React from 'react';
import {Link} from 'react-router-dom';

class ShopActionBar extends React.Component {
    render() {
        const {amount} = this.props;
        return (
            <div className="shop-action-bar">
                <div className="action-bar-wrapper">
                    <Link to="/your-machine" className="action-bar-back">&lt;&nbsp;Back</Link>
                    <span className="action-bar-amount">{amount} capsules selected</span>
                    {amount > 0 && amount < 150 && <span className="action-bar-min">The minimum amount of capsules is 150</span>}
                    {amount >= 150 && <Link to="/your-data" className="action-bar-next">Next</Link>}
                </div>
            </div>
        )
    }
}

export default ShopActionBar;