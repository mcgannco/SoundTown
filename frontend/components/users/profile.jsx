import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SubNav from '.././sub_nav/sub_nav';
import Footer from '.././footer/footer';
import UploadedSong from './uploadedsong';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const user_songs = this.props.songs.map((song,idx) => {

    if (song.author_id === this.props.currentUser.id) {
      return(
          <UploadedSong
            key={song.id}
            song={song}
            num={idx + 1}
            deleteSong={this.props.deleteSong}
            />
        );}
    });
    return (
      <div className="mainPageContainer">
        <NavBarBrowseContainer />
        <div className="UserContainer">
          <div className="UserBanner" style={ {backgroundImage: `url(${window.banner})`} }>
            <p className="Name">{this.props.currentUser.username}</p>
          </div>

          <div className="UserProfileContent">
            <div className="UserSongs">
              <div className="Header">
                <h1>Your Uploads</h1>
                </div>
              <ul className="SongList">
                {user_songs}
              </ul>
            </div>

            <div className="UserComments">
              <div className="Header">
                <h1>Your Comments</h1>
                </div>

              <ul>
                <li>comment</li>
                <li>comment</li>
                <li>comment</li>
                <li>comment</li>
                <li>comment</li>
                <li>comment</li>
              </ul>
            </div>
          </div>




        </div>
        <Footer />
    </div>
    );
  }
}

export default withRouter(Profile);
