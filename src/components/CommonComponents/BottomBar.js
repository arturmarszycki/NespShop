import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/common.scss';

const BottomBar = ({static_a}) => {
    const img = require('../../images/Logo_Nespresso.png');
    return (
        <div className="bar bottom-bar" style={static_a ? {position: 'static'} : {}}>
            <div className="bar-container">
                <img src={img.default} alt=""/>
                <ul className="footer-menu">
                    <li><Link to="#">Legal</Link></li>
                    <li><Link to="#">Terms &amp; Conditions</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BottomBar;