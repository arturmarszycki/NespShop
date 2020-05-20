import React from 'react';

const AllergensPanel = ({data}) => {
    return (
        <div className="allergens-panel">
            <div className="panel-left">
                <p dangerouslySetInnerHTML={{__html: data.ingredients_info}}>{}</p>
                <h4>ingredients & allergens</h4>
                <p>{data.ingredients_allergens}</p>
            </div>
            <div className="panel-right">
                <h4>NET WEIGHT (FOR 10 CAPSULES)</h4>
                <p>{data.net_weight}</p>
                <h4>{data.made_in}</h4>
            </div>
        </div>
    )
};

export default AllergensPanel;