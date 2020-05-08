import React from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';
import Shop from '../flow/Shop';

const App = () => {
    return (
        <Provider store={store}>
            <Shop type="full" /> {/*tree, list or full*/}
        </Provider>
    )
};

export default App;