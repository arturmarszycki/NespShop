import React from 'react';
import '../../../styles/Shop/Details/details.scss';
import AnimateHeight from 'react-animate-height';
import equal from 'fast-deep-equal';
import DetailsBasic from './basic';
import DetailsFull from './full';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            decaffeinated: false,
            height: 0,
            similar: null
        };
    };
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    closeDetails = () => {
        this.toggle();
        setTimeout(() => {
            this.props.hideDetails();
        }, 600);
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
    similarQty = id => {
        if (id) {
            this.setState({similar: id});
        } else {
            this.setState({similar: null});
        }
    }
    componentDidMount() {
        this.defineType();
        this.toggle();
    }
    componentDidUpdate(prevProps) {
        if(!equal(this.props.data, prevProps.data)) {
            this.defineType();
        }
    }
    render() {
        const {data, fullData, basic, addToCart, qty, showQty, detailsQty} = this.props;
        const {decaffeinated, height, similar} = this.state;
        const filteredCapsule = similar ? similar : data.id_shop_product;
        const similarList = data.similar_products.map(product => {
            return product = fullData.filter(item => item.id_shop_product === Number(product))[0];
        });
        const filteredCapsuleProp = fullData.filter(capsule => filteredCapsule === capsule.id_shop_product)[0];
        return (
            <div className="capsule-details-frame">
                <AnimateHeight duration={500} height={height}>
                    <div className="capsule-details">
                        {basic ?
                            <DetailsBasic
                                data={data}
                                closeDetails={this.closeDetails}
                                showIntensityGraphic={this.showIntensityGraphic}
                            /> :
                            <DetailsFull
                                item={data}
                                similarList={similarList}
                                filteredCapsuleProp={filteredCapsuleProp}
                                decaffeinated={decaffeinated}
                                closeDetails={this.closeDetails}
                                showQty={showQty}
                                showIntensityGraphic={this.showIntensityGraphic}
                                addToCart={addToCart}
                                qty={qty}
                                detailsQty={detailsQty}
                                similarQty={this.similarQty}
                            />
                        }
                    </div>
                </AnimateHeight>
            </div>
        )
    }
}

export default Details;