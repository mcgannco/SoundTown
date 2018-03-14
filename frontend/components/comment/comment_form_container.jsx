import { connect } from 'react-redux';
import { createComment,fetchComment,fetchComments, deleteComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import Comment from './comment_form';

const msp = (state) => {

  return({
    comments: Object.values(state.entities.comments),
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return({
    fetchComments: () => dispatch(fetchComments()),
    createComment: (song) => dispatch(createComment(song)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    fetchUsers: () => dispatch(fetchUsers())
  });
};

export default connect(
  msp,
  mdp
)(Comment);
