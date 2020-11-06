import React, { Component } from "react";
// import { Link } from "react-router-dom";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: ""
    };
  }

  handleSumbit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "sign_up" : "sign_in";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, userName, password } = this.state;
    const { buttonText, heading, errors, removeError, history, signUp } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div className="container">
        <div className="auth-form">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-xs-12 col-md-5">
              <form onSubmit={this.handleSumbit}>
                <h2 className="text-center">{heading}</h2>
                {errors.message && (
                  <div className="alert alert-danger">{errors.message}</div>
                )}

                <div className="form-group">
                  <input
                    type="text" 
                    className=""
                    id="username"
                    name="userName"
                    value={userName}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                  <label className="control-label" htmlFor="username"><i className="fa fa-envelope"></i> johndoe</label>
                  <i className="bar"></i>
                </div>
                <div className="form-group">
                  <input 
                    type="password"
                    className=""
                    id="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                  <label className="control-label" htmlFor="password"> <i className="fa fa-lock"></i>Password</label>
                  <i className="bar"></i>
                </div>

                {signUp && (
                  <div>
                    <div className="form-group">
                      <input
                        type="text" 
                        className=""
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                      <label className="control-label" htmlFor="email"><i className="fa fa-envelope"></i> johndoe@mail.com</label>
                      <i className="bar"></i>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"/><i className="helper"></i>I wish to receive bi-monthly newsletter emails on remote work tips.           
                      </label>
                    </div>
                  </div>
                  )}
                <div className="button-container d-flex justify-content-center">
                  <button type="submit" className="button"><span>{buttonText}</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm;