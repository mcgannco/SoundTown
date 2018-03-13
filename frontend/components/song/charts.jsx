import React from 'react';
import { Route } from 'react-router-dom';
import Charts_Container from './charts_container';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SongIndexItem from './song_index_item';
import Footer from '.././footer/footer';


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
                  Stream
                </li>
                <li>
                  Charts
                </li>
                <li>
                  Discover
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
                    Song Title
                  </li>
                  <li>
                    Artist
                  </li>
                </ul>
              </div>
            </div>
            <ul >
              {songs.map((song,idx) => <SongIndexItem key={song.id} song={song} num={idx + 1}/>)}
            </ul>
          </div>

          <div className="ContentRight">
            <h3>Who to follow</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Charts;
