import * as APIUtil from '../util/comment_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => {
  return({
    type: RECEIVE_COMMENTS,
    comments
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_COMMENT_ERRORS,
    errors
  });
};

export const removeComment = commentId => {
  return({
    type: REMOVE_COMMENT,
    commentId
  });
};

export const createComment = comment => dispatch => {

  return(
    APIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)),
  err => dispatch(receiveErrors(err.responseJSON))));
};

export const fetchComment = commentId => dispatch => {

  return(
    APIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)),
  err => dispatch(receiveErrors(err.responseJSON))));
};

export const fetchComments = () => dispatch => {

  return(
    APIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)),
  err => dispatch(receiveErrors(err.responseJSON))));
};

export const deleteComment = (commentId) => dispatch => {

  return(
    APIUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)),
  err => dispatch(receiveErrors(err.responseJSON))));
};
