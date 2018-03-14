import React from 'react';
import { Link } from 'react-router-dom';



const AlbumLittle = () => {
  return(
    <div>
      <audio id="player" src="http://s3.amazonaws.com/soundtown-dev/songs/audios/000/000/008/original/Grits_-_My_Life_Be_Like_%28Ooh-Aah%29_with_lyrics.mp3?1520982249"></audio>
      <div>
        <button onclick="document.getElementById('player').play()">Play</button>
        <button onclick="document.getElementById('player').pause()">Pause</button>
        <button onclick="document.getElementById('player').volume += 0.1">Vol+ </button>
        <button onclick="document.getElementById('player').volume -= 0.1">Vol- </button>
      </div>

    </div>
  );
};

export default AlbumLittle;
