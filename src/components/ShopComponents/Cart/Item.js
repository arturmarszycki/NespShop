import React from 'react';
import trash from '../../../images/trash.png';

const Item = ({data, remove}) => {
    const image = data.product_type === 'capsule' ? require(`../../../images/${data.title}.png`) : require(`../../../images/packet_${data.capsule_count}.png`);
    return (
        <li>
            <div className="cart-item-name">
                <img className="action-trash" src={trash} alt="" onClick={() => remove(data.id_shop_product)} />
                <img className="capsule-icon" src={image.default} alt="" />
                <span className="cart-item-title">{data.title}</span>
            </div>
            <div className="cart-item-info">
                <span className="cart-item-amount">&euro;&nbsp;{data.product_type === 'capsule' ? '0.40' : '42.5'}</span>
                <span className="cart-item-quantity">{data.qty}</span>
                <span className="cart-item-price">&euro;&nbsp;{data.product_type === 'capsule' ? data.qty * 0.4 : data.qty * 42.5}</span>
            </div>
        </li>
    )
}

export default Item;