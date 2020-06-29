import React from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';
import Shop from '../flow/Shop';
import Machine from '../flow/Machine';
import Start from './Start';
import Customer from './Customer';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Start} />
                    <Route path="/your-machine" component={Machine} />
                    <Route path="/choose-products" component={Shop} />
                    <Route path="/your-data" component={Customer} />
                </Switch>
            </Router>
        </Provider>
    )
};

export default App;