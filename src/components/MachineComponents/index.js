import React from 'react';
import MainForm from './MainForm';
import '../../styles/machine.scss';

class MachineWrapper extends React.Component {
    render() {
        return (
            <div className="container grey-bgc">
                <MainForm addMachineInfo={this.props.addMachineInfo} />
            </div>
        )
    }
}

export default MachineWrapper;