import reducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function configureStore() {
  const store = createStore(reducers, applyMiddleware(thunk))
  return store;
}

const store = configureStore();
export default store;
