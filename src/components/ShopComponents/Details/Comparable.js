import React from 'react';
import Similar from "./Similar";

const Comparable = ({list}) => {
    const items = list.map(item => <Similar key={item.id_shop_product} data={item} />);
    return <ul className="info-comparable">{items}</ul>
}

export default Comparable;