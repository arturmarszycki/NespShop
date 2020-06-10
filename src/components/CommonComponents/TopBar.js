import React from 'react';
import '../../styles/common.scss';

const TopBar = () => {
    const img = require('../../images/Logo_Nespresso.png');
    return (
        <div className="bar top-bar">
            <div className="bar-container">
                <img src={img.default} alt=""/>
                <div className="languages">{}</div>
            </div>
        </div>
    )
}

export default TopBar;