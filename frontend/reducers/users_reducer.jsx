import { RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return(merge({}, state, action.users));
    default:
      return state;
  }
};
