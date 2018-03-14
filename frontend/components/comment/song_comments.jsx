import React from 'react';
import { Link } from 'react-router-dom';

class SongComments extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchUser(this.props.comment.user_id);
    }
    render() {
      return(
        <li className="SongCommentList">
          <div className="PostedBy">
            <img className="LittleIcon" src={window.user_icon}></img>
            <div className="PostAuthor">
              <span className="Author">{this.props.user.username}</span>
              <span className="CommentBodyContent">{this.props.comment.body}</span>
            </div>
          </div>

          <span className="CommentBodyContent">{this.props.comment.created_at}</span>
        </li>

      );
    }
}

export default SongComments;
