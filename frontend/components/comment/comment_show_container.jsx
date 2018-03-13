import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import CommentShow from './comment_show';

const msp = (state) => {

  return({
    comments: Object.values(state.entities.comments),
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
  });
};

export default connect(
  msp,
  mdp
)(CommentShow);
