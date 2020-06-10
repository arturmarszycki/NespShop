import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/start.scss';

const Start = () => {
    const img = require('../images/Logo_Nespresso.png');
    return (
        <div className="page-start">
            <img src={img.default} alt=""/>
            <Link to="/your-machine">
                <span>promotion</span>
            </Link>
        </div>
    )
};

export default Start;