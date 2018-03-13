
import React from 'react';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import Footer from '.././footer/footer';




class SongShow extends React.Component {
  componentDidMount() {
    this.props.fetchSong(parseInt(this.props.match.params.songId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.song.id != nextProps.match.params.songId) {
      this.props.fetchSong(nextProps.match.params.songId);
    }
  }

  render() {

    const { song } = this.props;
    if (Object.keys(song).length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div className="mainPageContainer">
        <NavBarBrowseContainer />
        <div className="UserContainer">
          <div className="SongBanner" style={ {backgroundImage: `url(${this.props.currentUser.banner_img_url})`} }>

            <div className="SongInfo">
              <audio className="ChartsSongInfo" controls>

                  <source src={song.audio_url} type="audio/mpeg"/>
                </audio>
            </div>

            <div className="Creds">
              <p>{song.artist_name}</p>
              <h3>{song.title}</h3>
            </div>

          </div>

          <div className="SongProfileContent">
            <div className="Comments">
              <div className="CommentBar">
                <input className="AddComment"type="text" defaultValue="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
    );
  }
}

export default SongShow;
