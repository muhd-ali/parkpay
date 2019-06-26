import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from 'components/NotFound/Main';
import HomePage from 'components/HomePage/Main';
import QuickParkPage from 'components/QuickParkPage/Main';
import PassesPage from 'components/PassesPage/Main';

function Routes() {
    return <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/quickpark' component={QuickParkPage} />
        <Route exact={true} path='/passes' component={PassesPage} />
        <Route path='*' component={NotFoundPage} />
    </Switch>;
}

export default Routes;
