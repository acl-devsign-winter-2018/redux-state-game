import { createStore } from 'redux';
import { initialState, gameReducer } from './components/app/reducers';
// import { expensesByCategory } from './components/expenses/reducer';
// import thunk from 'redux-thunk';

const store = createStore(gameReducer, initialState);

// combine reducer
// const reducer = combineReducers({
//   initialState,
//   gameReducer
// });

// extension
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
// const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(thunk) 
//   ));

export default store;