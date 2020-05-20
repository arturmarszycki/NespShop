import React from 'react';
import MachineWrapper from './MachineComponents';

const Machine = ({addMachineInfo}) => {
    return (
        <>
            <MachineWrapper addMachineInfo={addMachineInfo} />
        </>
    )
};

export default Machine;