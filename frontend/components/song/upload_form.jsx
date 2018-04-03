import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SubNav from '.././sub_nav/sub_nav';
import Footer from '.././footer/footer_container';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songFile: null,
      songLoad:null,
      title: "",
      artist_name: "",
      imageFile: null,
      imageUrl: window.picback
    };
    this.updateFile = this.updateFile.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateArtist = this.updateArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.signInError = this.signInError.bind(this);
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

  updateImageFile(e) {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signInError() {
    if (this.props.currentUser === null) {
      return(
        <ul>
          <li>Please Sign in to Upload Songs</li>
        </ul>
      )
    }
  }


  handleSubmit(e) {

    const { createSong} = this.props;
    const songData  = new FormData();
    songData.append("song[title]", this.state.title);
    songData.append("song[artist_name]", this.state.artist_name);
    if (this.state.songFile && this.state.imageFile) {
      songData.append("song[audio]", this.state.songFile);
      songData.append("song[image]", this.state.imageFile);
    }
    createSong(songData).then( action => {
      this.props.history.push(`/songs/${action.song.id}`);
    });

  }

  render() {

    return (
      <div className="mainPageContainer">
        <div className="uploadContentMain">
          <NavBarBrowseContainer />
          <div className="UploadContainer">
          <SubNav />

            <div className="SongUploadForm">
              <div className="Form">
                <h3 className="UploadText">Upload to SoundTown</h3>
                <div className="uploadErrors">{this.renderErrors()}</div>
                <div className="uploadErrors">{this.signInError()}</div>
                <div className="UploadFiles">
                    <label className="ChooseFile">Add Audio File <i className="far fa-file-audio"></i>
                      <input className = "File" type="file" onChange={this.updateFile}/>
                    </label>

                    <div className ="uploadbody">
                      <div className="imageprev" style={ {backgroundImage: `url(${this.state.imageUrl})`} }>
                        <label className="ChooseFile">Add Picture <i className="fas fa-camera"></i>


                        <input className = "File" type="file" onChange={this.updateImageFile}/>
                      </label>
                    </div>

                      <div className="imagecreds">
                        <input className = "passwordInput" placeholder="Song Title" type="text" onChange={this.updateTitle}/>
                        <input className = "ArtistInput" placeholder="Artist Name" type="text" onChange={this.updateArtist}/>
                      </div>


                    </div>

                  </div>

                  <button className = "session-submit" onClick={this.handleSubmit}>Upload <i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default withRouter(UploadForm);
