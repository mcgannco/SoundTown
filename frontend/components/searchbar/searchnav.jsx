import React from 'react';
import { Link } from 'react-router-dom';


class SearchBarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.searchSongs(this.state.inputVal);
  }

  handleInput(event) {
   this.setState({inputVal: event.currentTarget.value});
 }

 matches() {
    let matches = [];
    this.props.songs.forEach(song => {
      let sub = song.title.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        if (this.state.inputVal.length > 0) {
          matches.push(song);
        }
      }
    });


    if (matches.length === 0 && this.state.inputVal.length > 0) {
      matches.push('No matches');
    }
    return matches;
  }

  render() {

    let results = this.matches().map((el, i) => {
      if (el === 'No matches') {
        return(
          <li className="searchlist"key={i}>{el}</li>
        )
      } else {
        return(
          <li className="searchlistnav" key={i}>
            <Link to={`/songs/${el.id}`}>{el.title}
            </Link>
            </li>
        )
      }
    });

    return(
      <div>
        <input
          onChange={this.handleInput}
          className="search-Bar"
          placeholder="Search">
        </input>
        <ul className="searchul">{results}</ul>

      </div>
    );
  }
}

export default SearchBarNav;
