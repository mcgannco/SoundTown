import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SubNav from '.././sub_nav/sub_nav';
import Footer from '.././footer/footer';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainPageContainer">
        <div className="UserContainer">
          <NavBarBrowseContainer />
          <div className="UserBanner" style={ {backgroundImage: `url(${window.banner})`} }>
            <p className="Name">{this.props.currentUser.username}</p>
          </div>
        </div>
        <Footer />
    </div>
    );
  }
}

export default withRouter(Profile);
