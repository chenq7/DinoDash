import React from "react";
import { withRouter } from "react-router-dom";
import "./signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: ""
    };
    
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    
    this.props.signup(user);
    // this.props.signup(user)
    // .then(() => this.props.login(user))
  }
  
  handleDemo(e) {
   e.preventDefault();
   this.props.demologin();
   this.props.history.push("/minions");
   this.props.closeModal();
 };
 
  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.props.signedIn){
      this.props.clearErrors();
      this.props.login(this.state);
      this.props.history.push('/minions');
      this.props.closeModal();
    }

    return (
      <div className="signupForm">
        <h3 className="signupTitle">Signup</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="signupFieldContainer">
            <div className="signupFields">
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
                className="usernameField"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="passwordField"
              />
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
                className="passwordField"
              />
              <br />
              <input type="submit" value="Submit" className="submitButton" />
              {this.renderErrors()}
              <div className="loginLink" onClick={() => {
                this.props.clearErrors();
                this.props.loginForm();
                }}>
                Already a member? Log in!
                </div> 
               <button className="demoLogin" onClick={this.handleDemo}>
                Demo Login
                </button> 
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
