import React from 'react';
import description from "./description";

const DetailsBasic = ({data, closeDetails, showIntensityGraphic}) => {
    const desc = description.filter(item => item.id === data.id_shop_product)[0];
    return (
        <div className="details-inner">
            <div className="close-details">
                <span onClick={closeDetails}>x</span>
            </div>
            <div className="details-info">
                <div className="details-data details-basic">
                    <h3 className="capsule-title">{data.title}</h3>
                    <p className="capsule-subtitle">{desc.subtitle}</p>
                    <p className="capsule-desc">{desc.desc}</p>
                    <div className="capsule-info">
                        <div className="capsule-info-point">
                            <span className="info-label">Intensity:</span>
                            <div className="info-content cup-intensity">
                                <span>{data.intensity}</span>
                                <div className="intensity-graphic">{showIntensityGraphic(data.intensity)}</div>
                            </div>
                        </div>
                        <div className="capsule-info-point">
                            <span className="info-label">Cup sizes:</span>
                            <p>{data.cup_size}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsBasic;