import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './context/_helpers';
import { alertActions } from './context/_actions';
import { DevicePage, HomePage, PrivateRoute, LoginPage, RegisterPage, TransferPage } from './components'

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, [dispatch]);

    return (
        <div className="container">
            <div className="col-md-8 offset-md-2">
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/devices" component={DevicePage} />
                        <Route path="/transfer" component={TransferPage} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
