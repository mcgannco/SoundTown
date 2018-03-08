import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {username: "DemoUser", password: "123456"};
    this.props.login(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let passwordInput;
    let usernameInput;
     if(this.props.errors[1]) {
       passwordInput = "passwordInputErrors";
       usernameInput = "usernameInputErrors";
     } else if (this.props.errors[0] && this.props.formType === "login") {
       passwordInput = "passwordInputErrors";
       usernameInput = "passwordInputErrors";
     } else if (this.props.errors[0] === "Password is too short (minimum is 6 characters)") {
       passwordInput = "passwordInputErrors";
       usernameInput = "usernameInput";
    } else if (this.props.errors[0] === "Username can't be blank") {
      passwordInput = "passwordInput";
      usernameInput = "usernameInputErrors";
      }else {
       passwordInput = "passwordInput";
       usernameInput = "usernameInput";
     }


    let greeting;
    if(this.props.formType === "signup") {
      greeting = "Create Account";
    } else {
      greeting = "Sign In";
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <div className="login-form">
            <div className="Errors">{this.renderErrors()}</div>
                <input type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.update('username')}
                  className={usernameInput}
                />

              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className={passwordInput}
              />


            <input className="session-submit" type="submit" value={greeting} />
            <h3>Or</h3>
            <button onClick={this.demoLogin} className="demoLogin">Demo Tour</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
