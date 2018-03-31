import React from 'react';
import { Link } from 'react-router-dom';
import TrendingSongs_Container from './trending_songs_container';
import TrendingIndexItem from './trending_index_items';


class TrendingSongs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;

  return(
    <div className="TrendingContainer">
      <h3 className ="trending">Hear what’s trending for free in the SoundCloud community</h3>

      <ul>
        {songs.slice(0,5).map((song,idx) => <TrendingIndexItem key={song.id} image ={song.image_url} song={song} num={idx + 1}/>)}
      </ul>

      <ul>
        {songs.slice(6,11).map((song,idx) => <TrendingIndexItem key={song.id} image ={song.image_url} song={song} num={idx + 1}/>)}
      </ul>

      <div className= "Top50">
        <Link to='/charts'><span>Explore Our Charts</span></Link>
      </div>
    </div>
  );
  }
};

export default TrendingSongs;
