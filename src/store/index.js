// Define the root reducer and Redux store here 
import produceReducer from './produceReducer';
import cartReducer from './cartReducer';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const rootReducer = combineReducers({
    produce: produceReducer,
    cart: cartReducer
});

let enhancer;

if(process.env.NODE_ENV !== 'production'){
    const logger = require("redux-logger").default;
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;