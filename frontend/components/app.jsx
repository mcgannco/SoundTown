import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ChartsContainer from './song/charts_container';
import UploadContainer from './song/upload_container';
import MainPageContainer from './main_page/main_page_container';
import { AuthRoute, ProtectedRoute } from '.././util/route_util';
import Modal from './modal/modal';

const App = () => {
  return(
  <div className= "MainShell">
    <Modal />
    <Switch>
      <Route exact path='/' component={ MainPageContainer } />
      <Route path='/charts' component={ ChartsContainer } />
      <Route path='/upload' component={ UploadContainer } />
    </Switch>
  </div>
  );
};

export default App;
