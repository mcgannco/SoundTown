import React from 'react';
import { Link } from 'react-router-dom';

const mainPage = () => {
  return(
    <div className="mainPageContainer">

      <div className="mainPageContent">
          <img className="mainBackground" src={window.homepage} alt="ST Logo"/>
      </div>

    </div>
  );
};

export default mainPage;
