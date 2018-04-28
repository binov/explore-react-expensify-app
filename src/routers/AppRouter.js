import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';


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
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;



