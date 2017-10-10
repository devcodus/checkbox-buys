import { combineReducers } from 'redux';
import handleChangeReducer from './checkboxReducer';
import buyCartReducer from './buyCartReducer';
import listCartReducer from './listCartReducer';

const appReducer = combineReducers({
  total: handleChangeReducer,
  wallet: buyCartReducer,
  list: listCartReducer,

})

export default appReducer;
