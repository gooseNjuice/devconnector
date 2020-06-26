import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./auth/Login";
import Register from "./auth/Register";
import NavBar from "./layout/Navbar";
import Landing from "./layout/Landing";
// Redux
import {Provider} from 'react-redux';
import store from "./store";

import './App.css';

const App = () => (
    <Provider store={store}>
        <Router>
        <Fragment>
            <NavBar/>
            <Route exact path='/' component={Landing}/>
            <section className="container">
                <Switch>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </section>
        </Fragment>
    </Router>
    </Provider>
);

export default App;
