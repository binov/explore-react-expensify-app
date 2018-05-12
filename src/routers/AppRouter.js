import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';


//React passes props to the components inside of Route
// - history object - used for redirection
// - match object - params ; pathparams - {props.match.params.id}
// - location - query params, sort, hash (for moving to the particular component in a SPA)
// - 

//Need for Redux
// - No common parent to store the state in case of complex apps which uses routes
// - Components are closely coupled wiith props, may not be able to reuse 
//   when using redux,no props are passed,Instead they interact wih global state container 
//   for get or set values
// Props are perfectly valid if the compnents are actually using it

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;



