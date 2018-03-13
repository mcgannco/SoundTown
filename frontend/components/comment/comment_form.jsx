import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      song_id: this.props.match.params.songId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state).then(() => this.props.history.push(`/songs/${this.state.song_id}`));
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input onChange={this.updateBody} value={this.state.body} className="AddComment"type="text" defaultValue="Write a comment"></input>
       </form>
     </div>
    );
  }
}

export default withRouter(Comment);
