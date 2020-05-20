import {connect} from 'react-redux';
import Machine from '../components/Machine';
import {addMachineInfo} from '../redux/actions/machineActions';

const mapDispatch = dispatch => ({
    addMachineInfo: info => dispatch(addMachineInfo(info))
});

export default connect(null, mapDispatch)(Machine);