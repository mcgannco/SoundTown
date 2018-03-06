import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionErrorsReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionErrorsReducer,
  errors: errorsReducer
});

export default rootReducer;
