import React from 'react';
import { Link } from 'react-router-dom';

const UploadedSong = ({ song, deleteSong, num }) => (
    <div className="UploadedSong">
      <li className="UploadedSongInfo">
        <button onClick={() => deleteSong(song.id)} className="XOut">X</button>
        <Link to={`/songs/${song.id}`}><span className="uploads">{song.title}</span></Link>

        <span className="uploads">{song.artist_name}</span>
        <Link to={`/songs/${song.id}`}><audio className="uploads" controls>
          <source src={song.audio_url} type="audio/mpeg"/>
        </audio></Link>
      </li>
    </div>
);

export default UploadedSong;
