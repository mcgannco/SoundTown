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

  componentWillReceiveProps(newProps){
    if(newProps.match.params.songId !== this.props.match.params.songId){
      this.setState({song_id: newProps.match.params.songId});
    }
  }

  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchUsers();
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.createComment(this.state).then(() => this.props.history.push(`/songs/${this.state.song_id}`));
    this.setState({body: ""});
  }

  render() {
    return (
      <div className="CommentInput">
       <form onSubmit={this.handleSubmit}>
         <input onChange={this.updateBody} placeholder="Write a comment" value={this.state.body} className="AddComment"type="text" ></input>
       </form>
     </div>
    );
  }
}

export default withRouter(Comment);
