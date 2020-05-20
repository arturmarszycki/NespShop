import React from 'react';
import '../../../styles/Shop/Details/details.scss';
import equal from 'fast-deep-equal';
import DetailsBasic from './basic';
import DetailsFull from './full';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            decaffeinated: false
        };
    };
    closeDetails = () => {
        this.props.hideDetails();
    };
    defineType = () => {
        this.props.data.title.includes('Decaffeinato') ? this.setState({decaffeinated: true}) : this.setState({decaffeinated: false});
    };
    showIntensityGraphic = int => {
        let array = [], intensity = int;
        for (let i = 1; i <= 13; i++) {
            let el = intensity > 0 ? <span key={i} className="int-square active-square">{}</span> : <span key={i} className="int-square">{}</span>;
            array.push(el);
            intensity--;
        }
        return array;
    };
    chooseQty = () => {
        this.props.showQty(this.props.data);
    }
    componentDidMount() {
        this.defineType();
    }
    componentDidUpdate(prevProps) {
        if(!equal(this.props.data, prevProps.data)) {
            this.defineType();
        }
    }
    render() {
        const {data, fullData, basic} = this.props;
        const similarList = data.similar_products.map(product => {
            return product = fullData.filter(item => item.id_shop_product === Number(product))[0];
        });
        const filteredCapsuleProp = fullData.filter(capsule => data.id_shop_product === capsule.id_shop_product)[0];
        return (
            <div className="capsule-details">
                {basic ?
                    <DetailsBasic
                        data={data}
                        closeDetails={this.closeDetails}
                        showIntensityGraphic={this.showIntensityGraphic}
                    /> :
                    <DetailsFull
                        data={data}
                        similarList={similarList}
                        filteredCapsuleProp={filteredCapsuleProp}
                        decaffeinated={this.state.decaffeinated}
                        closeDetails={this.closeDetails}
                        chooseQty={this.chooseQty}
                        showIntensityGraphic={this.showIntensityGraphic}
                    />
                }
            </div>
        )
    }
}

export default Details;