import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = ({ song, num }) => (
  <li className="song-index-item">
      <span className="ChartsSongInfo">{num}</span>
      <Link to={`/songs/${song.id}`}><span className="ChartsSongInfo">{song.title}</span></Link>
      <span className="ChartsSongInfo">{song.artist_name}</span>
      <audio className="ChartsSongInfo" controls>
        <source src={song.audio_url} type="audio/mpeg"/>
      </audio>
  </li>
);

export default SongIndexItem;
