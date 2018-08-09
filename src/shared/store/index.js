
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as appReducer } from '../reducer/application';
import { reducer as productsReducer } from '../reducer/products';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    app: appReducer,
    products: productsReducer
})

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
