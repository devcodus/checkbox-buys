import { combineReducers } from 'redux';
import handleChangeReducer from './checkboxReducer';
import cartReducer from './cartReducer';

const appReducer = combineReducers({
  total: handleChangeReducer,
  wallet: cartReducer,

})

export default appReducer;
