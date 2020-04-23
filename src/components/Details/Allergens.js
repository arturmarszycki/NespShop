import React from 'react';

class Allergens extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="allergens">
                <div className="allergens-title">
                    <span className="title-icon">
                        <span className="icon-el-vertical">{}</span>
                        <span className="icon-el-horizontal">{}</span>
                    </span>
                    <p>ingredients & allergens</p>
                </div>
                <div className="allergens-panel">
                    <div className="panel-left">
                        <p>{data.ingredients_info}</p>
                        <h4>ingredients & allergens</h4>
                        <p>{data.ingredients_allergens}</p>
                    </div>
                    <div className="panel-right">
                        <h4>NET WEIGHT (FOR 10 CAPSULES)</h4>
                        <p>{data.net_weight}</p>
                        <h4>{data.made_in}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Allergens;