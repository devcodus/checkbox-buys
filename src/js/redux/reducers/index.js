import { combineReducers } from 'redux';
import handleChangeReducer from './checkboxReducer';
import buyCartReducer from './buyCartReducer';
import listCartReducer from './listCartReducer';
import pastPurchasesReducer from './pastPurchasesReducer'

const appReducer = combineReducers({
  total: handleChangeReducer,
  wallet: buyCartReducer,
  list: listCartReducer,
  bought: pastPurchasesReducer,

})

export default appReducer;
