import React from 'react';
import { Link } from 'react-router-dom';

const UploadedSong = ({ song }) => (
  <li className="song-index-item">
      <span className="ChartsSongInfo">{song.id}</span>
      <span className="ChartsSongInfo">{song.title}</span>
      <span className="ChartsSongInfo">{song.artist_name}</span>
      <audio className="ChartsSongInfo" controls>
        <source src={song.audio_url} type="audio/mpeg"/>
      </audio>
  </li>
);

export default UploadedSong;
