import React from 'react';
import { Link } from 'react-router-dom';



const TrendingSongs = () => {
  return(
    <div className="TrendingContainer">
      <h3 className ="trending">Hear what’s trending for free in the SoundCloud community</h3>

      <ul>
        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>
      </ul>

      <ul>
        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>

        <li>
          <div>
            <img className="song" src={window.album} alt="ST Logo"/>
            <h3 className="SongTitle">Title</h3>
            <h3 className="Artist">Artist</h3>
          </div>
        </li>
      </ul>

      <div className= "Top50">
        <Link to='/charts'><span>Explore Our Charts</span></Link>
      </div>
    </div>
  );
};

export default TrendingSongs;
