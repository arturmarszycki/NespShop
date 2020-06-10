import React from 'react';
import SingleStep from './SingleStep';
import '../../styles/common.scss';

const Steps = ({step}) => {
    const steps = ['your machine', 'your coffee order', 'your personal data', 'order summary & confirmation'].map((el, index) => {
        if (index < step) {
            return (
                <SingleStep key={index} name={el} active line={index !== 0} />
            )
        } else {
            return (
                <SingleStep key={index} name={el} line={index !== 0} />
            )
        }
    });
    return (
        <div className="application-steps">
            <div className="steps-container">
                <ul className="steps">{steps}</ul>
            </div>
        </div>
    )
}

export default Steps;