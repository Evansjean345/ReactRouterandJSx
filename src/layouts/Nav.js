import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/abouts">About</Link>
        <Link to="/services">services</Link>
      </nav>
    </>
  );
}

export default Nav;
