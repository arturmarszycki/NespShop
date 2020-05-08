import React from 'react';
import trash from '../../images/trash.png';

const Item = ({data, remove}) => {
    const image = data.product_type === 'capsule' ? require(`../../images/${data.title}.png`) : require(`../../images/packet_${data.capsule_count}.png`);
    return (
        <li>
            <div className="cart-item-info">
                <img src={image.default} alt="" />
                <span className="cart-item-title">{data.title}</span>
                <span>{data.qty}</span>
            </div>
            <div className="cart-item-actions">
                <span className="cart-item-price">&euro;&nbsp;{data.product_type === 'capsule' ? data.qty * 0.4 : data.qty * 42.5}</span>
                <img src={trash} alt="" onClick={() => remove(data.id_shop_product)} />
            </div>
        </li>
    )
}

export default Item;