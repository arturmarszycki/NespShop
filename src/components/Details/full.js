import React from 'react';
import Comparable from "./Comparable";
import Allergens from "./Allergens";
import bagIcon from "../../images/icon_bag.png";
import description from "./description";

const DetailsFull = ({data, similarList, filteredCapsuleProp, decaffeinated, closeDetails, chooseQty, showIntensityGraphic}) => {
    const image = require(`../../images/${data.title}.png`);
    const desc = description.filter(item => item.id === data.id_shop_product)[0];
    return (
        <div className="details-inner">
            <div className="close-details">
                <span onClick={closeDetails}>x</span>
            </div>
            <div className="details-info">
                <div className="details-graphic">
                    <img src={image.default} alt="" />
                    {decaffeinated && <span className="decaf-circle">{}</span>}
                </div>
                <div className="details-data">
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
                        <div className="capsule-info-point">
                            <span className="info-label">Comparable coffee profiles:</span>
                        </div>
                        <Comparable list={similarList} />
                    </div>
                    <Allergens data={data} />
                </div>
                <div className="details-buy">
                    <div className="details-price">
                        <p className="cup-price">&euro;&nbsp;0,40</p>
                    </div>
                    <div className="details-cup-buy">
                        <button onClick={chooseQty}>
                            <img src={bagIcon} alt="" />
                            <span className="btn-title">add to basket</span>
                            <span className="btn-add-graphic">
                                        {filteredCapsuleProp.qty ?
                                            <span className="btn-qty">{filteredCapsuleProp.qty}</span> :
                                            <span className="btn_bars">
                                                <span className="bar-vertical">{}</span>
                                                <span className="bar-horizontal">{}</span>
                                            </span>
                                        }
                                    </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsFull;