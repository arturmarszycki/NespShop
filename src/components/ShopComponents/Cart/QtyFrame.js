import React from 'react';
import Qty from './Qty';
import '../../../styles/Shop/Cart/qty.scss';

const QtyFrame = ({data, addToCart, hideQty}) => {
    return (
        <div className="qty" onClick={() => hideQty()}>
            <Qty data={data} addToCart={addToCart} />
        </div>
    )
}

export default QtyFrame;