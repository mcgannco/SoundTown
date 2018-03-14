
import React from 'react';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import Footer from '.././footer/footer';
import CommentForm from '.././comment/comment_form_container';
import SongComments from '.././comment/song_comments';

class SongShow extends React.Component {

  componentDidMount() {
    this.props.fetchComments().then(() => {
      this.props.fetchSong(parseInt(this.props.match.params.songId));
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.song && (this.props.song.id && this.props.song.id != nextProps.match.params.songId)) {
      this.props.fetchSong(nextProps.match.params.songId);
    }
  }

  render() {
    var song_comments = this.props.comments.map((comment, idx) => {
      return(
        <SongComments
          key={comment.id}
          comment={comment}
          fetchUser={this.props.fetchUser}
          user={this.props.users[comment.user_id] || {}}
          />
      );
    });
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
              <p>Artist: {song.artist_name}</p>
              <h3>Song Title: {song.title}</h3>
            </div>

          </div>

          <div className="SongProfileContent">
            <div className="Comments">
              <div className="CommentBar">
                <CommentForm />
              </div>
              <ul className="CommentList">{song_comments}</ul>
            </div>
          </div>
        </div>
        <Footer />
    </div>
    );
  }
}

export default SongShow;
