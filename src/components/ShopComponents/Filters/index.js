import React from 'react';
import '../../../styles/Shop/Filters/filters.scss';

class Filters extends React.Component {
    state = {
        active: false,
        filters: {
            aromatic_profile: [],
            cup_size: [],
            intensity: []

        }
    }
    toggleFunctions = () => {
        this.setState(prevState => ({active: !prevState.active}));
    }
    render() {
        return (
            <div className="filters">
                <div className="filters-bar">
                    <button onClick={this.toggleFunctions}>
                        <span className="btn_graph">{}</span>
                        <span className="btn_text">filter</span>
                    </button>
                </div>
                <div style={this.state.active ? {height: 200, opacity: 1} : {height: 0, opacity: 0}} className="filters-frame">
                    <div className="filters-frame-top">
                        <span className="btn_reset_filters">Reset filters</span>
                        <span className="btn_close_filters" onClick={this.toggleFunctions}>x</span>
                    </div>
                    <div className="single-filter">
                        <p>{}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;