import React from 'react';
import { Link } from 'react-router-dom';
import AlbumLittle from '.././album_little/album_little';

const SongIndexItem = ({ song, num }) => (
  <li className="song-index-item">
    <span className="num">{num}</span>
    <div className="AlbumLittleCover" style={ {backgroundImage: `url(${song.image_url})`} }>
      <AlbumLittle
        song={song.audio_url}
        />
    </div>

    <div className="ArtistAudioCombo">
      <Link to={`/songs/${song.id}`}><span className="chartstitle">{song.title}</span></Link>
      <span className="chartsartist">{song.artist_name}</span>
    </div>

    <div className="UploadedC">
      <span className="Uploaded">uploaded: {song.created_at}</span>
    </div>
  </li>
);

export default SongIndexItem;
