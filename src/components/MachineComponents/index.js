import React from 'react';
import MainForm from './MainForm';
import SerialInfo from './SerialInfo';
import '../../styles/machine.scss';

class MachineWrapper extends React.Component {
    state = {
        serialInfo: false
    }
    showSerialInfo = () => {
        this.setState({serialInfo: true});
    }
    hideSerialInfo = () => {
        this.setState({serialInfo: false});
    }
    render() {
        const {serialInfo} = this.state;
        return (
            <div className="container grey-bgc">
                <MainForm addMachineInfo={this.props.addMachineInfo} showSerialInfo={this.showSerialInfo} />
                <hr className="form-hr" />
                {serialInfo && <SerialInfo hideSerialInfo={this.hideSerialInfo} />}
            </div>
        )
    }
}

export default MachineWrapper;