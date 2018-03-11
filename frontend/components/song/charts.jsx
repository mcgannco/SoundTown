import React from 'react';
import { Route } from 'react-router-dom';
import Charts_Container from './charts_container';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SongIndexItem from './song_index_item';


class Charts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    return(
      <div className="mainPageContainer">
          <NavBarBrowseContainer />
        <div className="IntroGreetingLoggedIn">
        </div>
        <div className="mainPageContentLoggedIn">
          <h2>This is where all the songs go...</h2>
          <br />
          <ul>
            {songs.map(song => <SongIndexItem key={song.id} song={song} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Charts;
