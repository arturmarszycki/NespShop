import React from 'react';

const Similar = ({data}) => {
    const image = require(`../../images/${data.title}.png`);
    return (
        <li className="similar-capsule">
            <div className="similar-capsule-inner">
                <img src={image.default} alt="" />
                <p className="cup-name">{data.title}</p>
            </div>
        </li>
    )
}

export default Similar;