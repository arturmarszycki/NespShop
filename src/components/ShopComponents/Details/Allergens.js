import React from 'react';
import AllergensPanel from './AllergensPanel';
import '../../../styles/Shop/Details/allergens.scss';
import equal from 'fast-deep-equal';

class Allergens extends React.Component {
    state = {
        panel: false,
        hideSmoothly: false
    }
    togglePanel = () => {
        const {panel} = this.state;
        if (panel) {
            this.setState({hideSmoothly: true});
            setTimeout(() => {
                this.setState({panel: false, hideSmoothly: false});
            }, 1000);
        } else {
            this.setState({panel: true});
        }
        //this.setState(prevState => ({panel: !prevState.panel}));
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
        const {panel, hideSmoothly} = this.state;
        return (
            <div className="allergens">
                <div className="allergens-title" onClick={this.togglePanel}>
                    <span className={panel ? 'title-icon' : 'title-icon icon-animate'}>
                        <span className="icon-el-horizontal">{}</span>
                        <span className={panel ? 'icon-el-vertical icon-el-blur' : 'icon-el-vertical'}>{}</span>
                    </span>
                    <p>ingredients & allergens</p>
                </div>
                {panel && <AllergensPanel data={data} hideSmoothly={hideSmoothly} />}
            </div>
        )
    }
}

export default Allergens;