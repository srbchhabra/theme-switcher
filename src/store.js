// store.js
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import themeReducer from './redux/reducers/themeReducer'; 
import taskReducer from './redux/reducers/taskreducer';
const rootReducer = combineReducers({
  theme: themeReducer, 
  
  tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;
