
import React from 'react';
import { Link } from 'react-router-dom';

class SongShow extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.song.id != nextProps.match.params.songId) {
      this.props.fetchPost(nextProps.match.params.songId);
    }
  }

  render() {
    const { song } = this.props;
    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{song.title}</h3>
        <p>{song.artist_name}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default SongShow;
