import React from 'react';
import AnimateHeight from 'react-animate-height';
import equal from 'fast-deep-equal';

class AllergensPanel extends React.Component {
    state = {
        height: 0
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    componentDidMount() {
        this.toggle();
    }
    componentDidUpdate(prevProps) {
        if(!equal(this.props.hideSmoothly, prevProps.hideSmoothly)) {
            this.toggle();
        }
    }
    render() {
        const {data} = this.props;
        const {height} = this.state;
        return (
            <AnimateHeight duration={500} height={height}>
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
            </AnimateHeight>
        )
    }
}

export default AllergensPanel;