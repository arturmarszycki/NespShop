import React from 'react';
import MainForm from './MainForm';
import SerialInfo from './SerialInfo';
import '../../styles/machine.scss';
import TopBar from '../CommonComponents/TopBar';
import BottomBar from '../CommonComponents/BottomBar';
import Steps from '../CommonComponents/Steps';

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
        const {machineData, addMachineInfo} = this.props;
        const {serialInfo} = this.state;
        return (
            <div className="container grey-bgc">
                <TopBar />
                <Steps step={1} />
                <MainForm machineData={machineData} addMachineInfo={addMachineInfo} showSerialInfo={this.showSerialInfo} />
                <hr className="form-hr" />
                {serialInfo && <SerialInfo hideSerialInfo={this.hideSerialInfo} />}
                <BottomBar />
            </div>
        )
    }
}

export default MachineWrapper;