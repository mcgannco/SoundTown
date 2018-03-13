import React from 'react';
import { Link } from 'react-router-dom';

const SongComments = ({ comment }) => (
  <li>
    <span>{comment.body}</span>
  </li>
);

export default SongComments;
