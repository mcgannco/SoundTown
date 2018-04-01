import React from 'react';
import WaveSurfer from 'wavesurfer.js';


class WaveForm extends React.Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.playClicked = this.playClicked.bind(this);
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `#song-${this.props.song.id}-waveform`,
      progressColor: '#f50',
      height: this.props.height,
      cursorWidth: 0,
      barHeight: 1,
      barWidth: 2,
      waveColor: this.props.color
    });
    this.wavesurfer.load(this.props.track.audio_url);
    this.wavesurfer.setMute(true);
    this.wavesurfer.on('seek', e => {
      if (this.props.track.id === this.props.song.id) {
        this.props.setSeekPlayerTo(e);
      }
    });
    this.wavesurfer.on('ready', e => {
      if (this.props.displayComments) {
        this.setState({comments: <CommentOverlayContainer
          duration={this.wavesurfer.getDuration()}
          song={this.props.song.id}/>}) ;
        }
      });
    }

  play() {
    if (this.props.playing  && this.props.songObj.id === this.props.currentSong.id) {
      this.props.isPlaying(false);

    } else {
      this.props.isPlaying(true);

    }
  }

  playClicked() {
    this.props.playSong(this.props.songObj);
    this.play();
  }

  playorpause() {
    return (this.props.playing  && (this.props.songObj.id === this.props.currentSong.id));
  }

  render () {
    return (
      <div className="relative-box">
        <div id={`song-${this.props.track.id}-waveform`}></div>
        { this.state.comments }
      </div>
    );
  }
}

export default WaveForm;
