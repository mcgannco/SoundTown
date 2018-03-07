import React from 'react';
import { Link } from 'react-router-dom';



const loggedOutMainPage = () => {
  return(
    <div className="mainPageContainer">

      <div className="mainPageContent">
          <img className="mainBackground" src={window.homepage} alt="ST Logo"/>
      </div>

    </div>
  );
};

const loggedInMainPage = () => {
  return(
    <div className="mainPageContainer">

      <div className="mainPageContent">

      </div>

    </div>
  );
};


const mainPage = ({ currentUser }) => {
  return(
    currentUser ? loggedInMainPage() : loggedOutMainPage()
  );
};

export default mainPage;
