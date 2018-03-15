import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, deleteComment }) => (
  <li className="CommentItems">
    <span>{comment.body}</span>

    <div className="ViewDelete">
      <Link to={`/songs/${comment.song_id}`}>View</Link>
      <button onClick={() => deleteComment(comment.id)}>Delete</button>
    </div>

  </li>
);

export default CommentIndexItem;
