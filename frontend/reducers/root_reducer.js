import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionErrorsReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionErrorsReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
