import {connect} from 'react-redux';
import {addToCart} from '../redux/actions';
import Cart from '../components/Cart';

const mapState = state => ({
    cart: state.cart
});
const mapDispatch = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default connect(mapState, mapDispatch)(Cart);