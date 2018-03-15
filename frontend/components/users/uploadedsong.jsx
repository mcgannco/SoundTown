import React from 'react';
import { Link } from 'react-router-dom';
import AlbumLittle from '.././album_little/album_little';

const UploadedSong = ({ song, deleteSong, num }) => (
    <div className="UploadedSongUser">
      <li className="UploadedSongInfo">

        <div className="AlbumContainer">
          <button onClick={() => deleteSong(song.id)} className="XOut">X</button>
            <div className="AlbumBigSongCover" style={ {backgroundImage: `url(${song.image_url})`} }>
              <AlbumLittle
                song={song.audio_url}
                />
            </div>
        </div>



        <div className="YourUploadsCreds">
          <Link to={`/songs/${song.id}`}><span className="chartstitlesong">{song.title}</span></Link>
          <span className="chartsartistsong">{song.artist_name}</span>
        </div>

        <div className="UploadedC">
          <span className="Uploaded">uploaded: {song.created_at}</span>
        </div>



      </li>
    </div>
);

export default UploadedSong;
