import React from 'react';
import { Link } from 'react-router-dom';

const SongComments = ({ comment }) => (
  <li className="SongCommentList">
    <img className="LittleIcon" src={window.user_icon}></img>
    <span>{comment.body}</span>
  </li>
);

export default SongComments;
