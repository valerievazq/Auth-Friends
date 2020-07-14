import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <header className="header">
        <h3>
          <Link to="/Friends">Friends List</Link>
        </h3>

        <h3>
          <Link to="/AddFriend">Add New Friend</Link>
        </h3>
        <h3>
          <Link to="/">Logout</Link>
        </h3>
      </header>
    </div>
  );
};

export default Nav;
