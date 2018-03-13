
import React from 'react';
import { Link } from 'react-router-dom';
import CommentShow_Container from './comment_show_container';
import CommentIndexItem from './comment_index_item';



class CommentShow extends React.Component {

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const user_comments = this.props.comments.map((comment,idx) => {

    if (comment.user_id === this.props.currentUser.id) {
      return(
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            num={idx + 1}
            deleteComment={this.props.deleteComment}
            />
        );}
    });
    return (
    <div>
      <ul>{user_comments}</ul>
    </div>
    );
  }
}

export default CommentShow;
