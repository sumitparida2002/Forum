import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { MdAddCircle } from "react-icons/md";

import "./styles.css";
import redditLogo from "../../images/reddit.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={redditLogo} alt="logo" className="logo-img" />
          <h3 className="logo-text">meddit</h3>
        </div>
        <div>
          <input type="text" className="searchBar" placeholder="Search"></input>
        </div>
        <div>
          <a href="/createPost" className="add-btn">
            <MdAddCircle className="add-btn-1" />
          </a>
        </div>
        <div className="login-btn">
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("Error")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
