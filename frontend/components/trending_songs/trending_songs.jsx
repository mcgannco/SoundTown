import React from 'react';
import { Link } from 'react-router-dom';



const TrendingSongs = () => {
  return(
    <div className="TrendingContainer">

      <div className="TopRowSongs">
        <ul className="TopList">
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>


        </ul>
      </div>

      <div className="BottomRowSongs">
        <ul className="BottomList">
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>
          <li><img className="logo" src={window.logo} alt="ST Logo"/></li>

        </ul>
      </div>

    </div>
  );
};

export default TrendingSongs;
