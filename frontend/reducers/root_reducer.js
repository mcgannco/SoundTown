import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionErrorsReducer from './session_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionErrorsReducer,
  ui: uiReducer,
  errors: errorsReducer,
});

export default rootReducer;
