import React from 'react';
import AllergensPanel from './AllergensPanel';
import '../../../styles/Shop/Details/allergens.scss';
import equal from 'fast-deep-equal';

class Allergens extends React.Component {
    state = {
        panel: false,
        hideSmoothly: false,
        animateIcon: false
    }
    togglePanel = () => {
        const {panel} = this.state;
        if (panel) {
            this.setState({hideSmoothly: true, animateIcon: false});
            setTimeout(() => {
                this.setState({panel: false, hideSmoothly: false});
            }, 600);
        } else {
            this.setState({panel: true, animateIcon: true});
        }
    }
    hidePanel = () => {
        this.setState({panel: false, animateIcon: false});
    }
    componentDidUpdate(prevProps) {
        if(!equal(this.props.data, prevProps.data)) {
            this.hidePanel();
        }
    }
    render() {
        const {data} = this.props;
        const {panel, hideSmoothly, animateIcon} = this.state;
        return (
            <div className="allergens">
                <div className="allergens-title" onClick={this.togglePanel}>
                    <span className={animateIcon ? 'title-icon' : 'title-icon icon-animate'}>
                        <span className="icon-el-horizontal">{}</span>
                        <span className={animateIcon ? 'icon-el-vertical icon-el-blur' : 'icon-el-vertical'}>{}</span>
                    </span>
                    <p>ingredients & allergens</p>
                </div>
                {panel && <AllergensPanel data={data} hideSmoothly={hideSmoothly} />}
            </div>
        )
    }
}

export default Allergens;