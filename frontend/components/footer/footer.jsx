import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="FooterContainer">
      <div className="PlayBar">
        <audio className="audiobar" controls type="audio/ogg">
        </audio>
      </div>
    </div>
  );
};

export default Footer;
