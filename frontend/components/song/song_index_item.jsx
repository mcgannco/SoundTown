import React from 'react';
import { Link } from 'react-router-dom';


const SongIndexItem = ({song}) => {

  return (
    <li>
      <audio controls>
        <source src={song.audio_url} type="audio/ogg"/>
      </audio>
    </li>);
};

export default SongIndexItem;
