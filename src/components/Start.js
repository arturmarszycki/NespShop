import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/start.scss';

const Start = () => {
    return (
        <div className="page-start">
            <Link to="/your-machine">
                <span>promotion</span>
            </Link>
        </div>
    )
};

export default Start;