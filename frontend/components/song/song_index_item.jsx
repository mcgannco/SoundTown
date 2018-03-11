import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = ({ song }) => (
  <li className="song-index-item">
      <span>{song.id}</span>
      <span>{song.title}</span>
      <span>{song.artist_name}</span>
      <audio controls>
        <source src={song.audio_url} type="audio/mpeg"/>
      </audio>
  </li>
);

export default SongIndexItem;
