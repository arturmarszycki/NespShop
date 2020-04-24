import React from 'react';

const Item = ({data}) => {
    return (
        <li>{data.title} {data.qty}</li>
    )
}

export default Item;