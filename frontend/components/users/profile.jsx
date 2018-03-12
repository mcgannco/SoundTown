import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SubNav from '.././sub_nav/sub_nav';
import Footer from '.././footer/footer';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainPageContainer">
        <div className="UserContainer">
          <NavBarBrowseContainer />
          <h5 className="username">{this.props.currentUser.username}</h5>
        </div>
        <Footer />
    </div>
    );
  }
}

export default withRouter(UploadForm);
