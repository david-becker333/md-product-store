
import { combineReducers } from 'redux';
import productReducer from './product-reducer';


const appReducer = combineReducers(
  {
    product: productReducer
  });

export default appReducer;

