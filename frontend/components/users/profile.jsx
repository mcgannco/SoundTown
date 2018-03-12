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
    const user_songs = this.props.songs.map((song) => {

    if (song.author_id === this.props.currentUser.id) {
      return(
          <UploadedSong
            key={song.id}
            song={song}
            />
        );}
    });
    return (
      <div className="mainPageContainer">
        <div className="UserContainer">
          <NavBarBrowseContainer />
          <div className="UserBanner" style={ {backgroundImage: `url(${window.banner})`} }>
            <p className="Name">{this.props.currentUser.username}</p>
          </div>
          <div className="UserSongs">
            <h1>Your Uploads</h1>
            <ul>
              {user_songs}
            </ul>
          </div>
        </div>
        <Footer />
    </div>
    );
  }
}

export default withRouter(Profile);
