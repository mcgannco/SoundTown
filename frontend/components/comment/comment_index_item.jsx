import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment }) => (
  <li>
    <span>{comment.body}</span>
  </li>
);

export default CommentIndexItem;
