import React from 'react';
import Similar from "./Similar";

const Comparable = ({list, showSimilar}) => {
    const items = list.map(item => <Similar key={item.id_shop_product} data={item} showSimilar={showSimilar} />);
    return <ul className="info-comparable">{items}</ul>
}

export default Comparable;