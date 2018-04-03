import React from 'react';
import { Route } from 'react-router-dom';
import Charts_Container from './charts_container';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SongIndexItem from './song_index_item';
import AlbumLittle from '.././album_little/album_little';


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
        <div className="ChartsContent">
          <div className="ContentLeft">
            <div className="ContentOptions">
              <ul>
                <li>
                  SoundTowns Charts
                </li>
              </ul>
            </div>

            <div className="ContentHeader">
              <div className="ContentHeaderList">
                <ul>
                  <li>
                    #
                  </li>
                  <li>
                    Track
                  </li>
                </ul>
              </div>
            </div>
            <ul >
              {songs.reverse().map((song,idx) => <SongIndexItem key={song.id} image ={song.image_url} song={song} num={idx + 1}/>)}
            </ul>
          </div>

          <div className="ContentRight">
            <div className="ContentOptionsRight">
              <ul>
                <li>
                  <i className="fas fa-users"></i> Who to follow
                </li>
                <li>
                  <i className="fas fa-sync-alt"></i> Refresh
                </li>
              </ul>
            </div>

            <div className="ListeningHistory">
              <ul>
                <li>
                  <i className="far fa-calendar-alt"></i> Listening history
                </li>
                <li>
                  View all
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Charts;
