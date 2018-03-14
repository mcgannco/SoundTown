import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return(merge({}, state, action.users));
    case RECEIVE_USER:
      const user = {[action.user.id]: action.user};
      return(merge({}, state, user));
    default:
      return state;
  }
};
