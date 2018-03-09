import React from 'react';
import { Link } from 'react-router-dom';



const TrendingSongs = () => {
  return(
    <div className="TrendingContainer">
      <ul>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
      </ul>

      <ul>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
        <li><img className="song" src={window.album} alt="ST Logo"/></li>
      </ul>
    </div>
  );
};

export default TrendingSongs;
