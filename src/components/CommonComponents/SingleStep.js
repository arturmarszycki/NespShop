import React from 'react';

const SingleStep = ({name, active, line}) => {
    return (
        <li className={active ? 'single-step step-active' : 'single-step'}>
            <div className="step-circle">
                <span>{}</span>
            </div>
            <p className="step-name">{name}</p>
            {line && <span className="step-line">{}</span>}
        </li>
    )
}

export default SingleStep;