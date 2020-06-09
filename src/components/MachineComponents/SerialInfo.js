import React from 'react';

const SerialInfo = ({hideSerialInfo}) => {
    const image = require('../../images/serial_help_label.png');
    return (
        <div className="info-frame">
            <div className="serial-info">
                <img src={image.default} alt=""/>
                <div className="serial-info-p">
                    <p>The machine serial number can be found at the bottom of the machine, on the machine box or on the sticker on the leak grid. The number consists of 19 characters. Pay attention to the difference between the letter "O" instead of the number "0".</p>
                    <button onClick={hideSerialInfo}>close</button>
                </div>
            </div>
        </div>
    )
};

export default SerialInfo;