import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class Logout extends Component {
  logOut = () => {
    window.localStorage.clear();
    window.location.href = "/sign-in";
  };

  render() {
    return (
      <div>
        <h2>Logout Component</h2>
        {/* Use the Link component to navigate to the "/sign-in" route */}
        <Link to="/sign-in">
          <button onClick={this.logOut} className="btn btn-primary login-button">
            Log Out
          </button>
        </Link>
      </div>
    );
  }
}

export default Logout;