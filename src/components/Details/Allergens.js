import React from 'react';
import AllergensPanel from './AllergensPanel';
import '../../styles/Details/allergens.scss';
import equal from 'fast-deep-equal';

class Allergens extends React.Component {
    state = {
        panel: false
    }
    togglePanel = () => {
        this.setState(prevState => ({panel: !prevState.panel}));
    }
    hidePanel = () => {
        this.setState({panel: false});
    }
    componentDidUpdate(prevProps) {
        if(!equal(this.props.data, prevProps.data)) {
            this.hidePanel();
        }
    }
    render() {
        const {data} = this.props;
        return (
            <div className="allergens">
                <div className="allergens-title" onClick={this.togglePanel}>
                    <span className="title-icon">
                        <span className="icon-el-horizontal">{}</span>
                        {!this.state.panel && <span className="icon-el-vertical">{}</span>}
                    </span>
                    <p>ingredients & allergens</p>
                </div>
                {this.state.panel && <AllergensPanel data={data} />}
            </div>
        )
    }
}

export default Allergens;