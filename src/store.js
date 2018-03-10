import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { initialState, gameReducer } from './components/app/reducers';
// import { expensesByCategory } from './components/expenses/reducer';
import thunk from 'redux-thunk';



// combine reducer
const reducer = combineReducers({

});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  ));

export default store;