import React from 'react';
import MachineWrapper from './MachineComponents';

const Machine = ({machineData, addMachineInfo}) => {
    return (
        <>
            <MachineWrapper machineData={machineData} addMachineInfo={addMachineInfo} />
        </>
    )
};

export default Machine;