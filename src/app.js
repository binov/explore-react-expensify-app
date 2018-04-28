import React from 'react';
import ReactDOM from 'react-dom';
// Provider allows us to provide the store to all
// of the components that make up the application
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleComponents = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleComponents);
// });

// store.dispatch(addExpense({description: 'Water bill', amount: 300}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 500, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}));




const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

// We can pass JSX into a component and that can access it via props.children
ReactDOM.render(jsx, document.getElementById('app'));
