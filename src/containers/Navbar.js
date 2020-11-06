import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";


class Navbar extends Component {

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { currentUser } = this.props;
    return (
      <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" >KeyaJob</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
          {this.props.currentUser.isAuthenticated ? (
           <ul className="navbar-nav ml-auto justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/jobs/new">Post a job <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="" className="nav-link"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className=""><i className="fa fa-ellipsis-h"></i></span>
                </Link>
                <div className="dropdown-menu  dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <Link to="/blog" className="dropdown-item" >Blog</Link>
                  <Link to="/request/new" className="dropdown-item" >Contact</Link>
                  <Link to="/about" className="dropdown-item" >About us</Link>
                </div>
              </li>
              <li className="dropdown nav-item">
                <Link to="/" className="profile-photo dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                  <div className="profile-photo-small">
                    <img src="/img/avatar.jpg" alt="Circle Avatar" className="rounded-circle img-fluid" />
                  </div>
                <div className="ripple-container"></div></Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <h6 className="dropdown-header">{currentUser.user.userName}</h6>
                  <Link to={`/user/${currentUser.user.userId}/dashboard`} className="dropdown-item">Me</Link>
                  <Link to="/" className="dropdown-item" onClick={this.logout} style={{cursor: "pointer"}}>Sign out</Link>
                </div>
              </li>
            </ul>
          ): (
            <ul className="navbar-nav ml-auto justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/jobs/new">Post a job <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="" className="nav-link"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className=""><i className="fa fa-ellipsis-h"></i></span>
                </Link>
                <div className="dropdown-menu  dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <Link to="/blog" className="dropdown-item" >Blog</Link>
                  <Link to="/request/new" className="dropdown-item" >Contact</Link>
                  <Link to="/about" className="dropdown-item" >About us</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link" >Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" >Sign Up</Link>
              </li>
            </ul>
          )}
      </div>
    </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);