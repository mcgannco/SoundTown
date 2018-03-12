import React from 'react';
import { Link } from 'react-router-dom';

const UploadedSong = ({ song, deleteSong, num }) => (
    <div className="UploadedSong">
      <li className="UploadedSongInfo">
        <button onClick={() => deleteSong(song.id)} className="ChartsSongInfo">X</button>
        <span className="ChartsSongInfo">{num}</span>
        <span className="ChartsSongInfo">{song.title}</span>
        <span className="ChartsSongInfo">{song.artist_name}</span>
        <audio className="ChartsSongInfo" controls>
          <source src={song.audio_url} type="audio/mpeg"/>
        </audio>
      </li>
    </div>
);

export default UploadedSong;
