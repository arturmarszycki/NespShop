import React from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';
import Shop from '../containers/shop';

const App = () => {
    return (
        <Provider store={store}>
            <Shop type="full" />
        </Provider>
    )
};

export default App;