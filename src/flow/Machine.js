import {connect} from 'react-redux';
import Machine from '../components/Machine';
import {addMachineInfo} from '../redux/actions/machineActions';

const mapState = state => ({
    machineData: state.machine
});
const mapDispatch = dispatch => ({
    addMachineInfo: info => dispatch(addMachineInfo(info))
});

export default connect(mapState, mapDispatch)(Machine);