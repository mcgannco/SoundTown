import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SubNav from '.././sub_nav/sub_nav';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songFile: null,
      title: "",
      artist_name: ""
    };
    this.updateFile = this.updateFile.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateArtist = this.updateArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  updateArtist(e) {
    this.setState({
      artist_name: e.target.value
    });
  }

  updateFile(e) {

    const file = e.target.files[0];

       this.setState({ songFile: file});

  }


  handleSubmit(e) {
    const { createSong} = this.props;

    const songData  = new FormData();
    songData.append("song[title]", this.state.title);
    songData.append("song[artist_name]", this.state.artist_name);
    songData.append("song[audio_url]", this.state.songFile);
    createSong(songData).then( action => {
      this.props.history.push(`/charts`);
    });

  }

  render() {
    return (
      <div className="container">
          <NavBarBrowseContainer />
          <SubNav />
        <div className="UploadContainer">
          <div className="SongUploadForm">
            <h3>Upload to SoundTown</h3>
            <label>Title
              <input type="text" onChange={this.updateTitle}/>
            </label>

            <label>Artist Name
              <input type="text" onChange={this.updateArtist}/>
            </label>
            <input type="file" onChange={this.updateFile}/>
            <button onClick={this.handleSubmit}>Upload</button>
          </div>
        </div>
        <div className="mainPageContentLoggedIn">

        </div>
      </div>
    );
  }
}

export default withRouter(UploadForm);
