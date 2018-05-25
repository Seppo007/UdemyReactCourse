import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible one to screen
store.dispatch(addExpense({
  description: 'Water bill',
  amount: 4500,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  createdAt: 1000,
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 109500,
}));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
