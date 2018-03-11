import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
  return(



      <ul className="SubNavBar-List">

        <li>
        <Link to="/upload" className="UploadButtons">Upload</Link>
        </li>

        <li>
        <a href="#" className="UploadButtons">Your Tracks</a>
        </li>

        <li>
        <a href="#" className="UploadButtons">Stats</a>
        </li>

        <li>
        <a href="#" className="UploadButtons">Pro Plans</a>
        </li>

        <li>
        <a href="#" className="UploadButtons">Pulse</a>
        </li>

      </ul>




  );
};

export default SubNav;
