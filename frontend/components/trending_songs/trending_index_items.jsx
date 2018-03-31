import React from 'react';
import { Link } from 'react-router-dom';
import AlbumLittle from '.././album_little/album_little';

const TrendingIndexItem = ({ song, num }) => (
  <li>
    <div>
      <div className="song" style={ {backgroundImage: `url(${song.image_url})`} }>
        <AlbumLittle
          song={song.audio_url}
          songObj={song}
          />
      </div>
      <h3 className="SongTitle"><Link to={`/songs/${song.id}`}>{song.title}</Link></h3>
      <h3 className="Artist">{song.artist_name}</h3>
    </div>
  </li>
);

export default TrendingIndexItem;
