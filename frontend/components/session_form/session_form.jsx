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

            <div className="TitleWrapper">
              <h1 className="SessionGreeting">
                
              </h1>
                <div onClick={this.props.closeModal} className="close-x">&#10006;</div>
            </div>

            <div className="Errors">{this.renderErrors()}</div>
                <input type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.update('username')}
                  className="login-inputUsername"
                />

              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-inputPassword"
              />


            <input className="session-submit" type="submit" value={greeting} />
            <h3>Or</h3>
            <button className="demoLogin">Demo Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
