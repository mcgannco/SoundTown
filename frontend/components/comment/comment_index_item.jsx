import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, deleteComment }) => (
  <li className="CommentItems">
    <span>{comment.body}</span>

    <div class="ViewDelete">
      <Link to={`/songs/${comment.song_id}`}>View</Link>
      <button>Delete</button>
    </div>

  </li>
);

export default CommentIndexItem;
