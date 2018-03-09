import React from 'react';
import SongIndexItem from './song_index_item';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const songs = this.props.songs.map((song,idx) =>{
      return(
        <SongIndexItem
          key={song.id}
          song={song}
          />
      );
    });
    return(
      <div>
        <h1>{this.props.currentUser.username}</h1>
          <ul>
            {songs}
          </ul>


      </div>
    );
  }
}

export default Song;
