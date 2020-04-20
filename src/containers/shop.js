import {connect} from 'react-redux';
import Shop from '../components/Shop';
import {fetchData} from '../redux/actions';

const mapState = state => ({
    shop: state.shop
});
const mapDispatch = dispatch => ({
    getData: () => dispatch(fetchData())
});

export default connect(mapState, mapDispatch)(Shop);