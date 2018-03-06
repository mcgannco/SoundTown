import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="nav-Bar-GreetingCompt">
  <button><Link to="/login">Sign In</Link></button>
    <br />
  <button><Link to="/signup">Create Account</Link></button>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
