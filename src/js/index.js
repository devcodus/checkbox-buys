import { createStore } from 'redux';
import appReducer from './redux/reducers';

const store = createStore(appReducer);

store.subscribe(() =>{
  console.log('store changed', store.getState());
});

export default store;
