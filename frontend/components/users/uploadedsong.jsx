import React from 'react';
import { Link } from 'react-router-dom';

const UploadedSong = ({ song, deleteSong, num }) => (
    <div className="UploadedSong">
      <li className="UploadedSongInfo">
        <button onClick={() => deleteSong(song.id)} className="XOut">X</button>
        <span className="uploads">{song.title}</span>
        <span className="uploads">{song.artist_name}</span>
        <audio className="uploads" controls>
          <source src={song.audio_url} type="audio/mpeg"/>
        </audio>
      </li>
    </div>
);

export default UploadedSong;
