import {connect} from 'react-redux';
import Shop from '../components/Shop';
import {fetchData, updateShopItem, removeItem} from '../redux/actions/shopActions';

const mapState = state => ({
    shop: state.shop
});
const mapDispatch = dispatch => ({
    getData: () => dispatch(fetchData()),
    updateShopItem: item => dispatch(updateShopItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(mapState, mapDispatch)(Shop);