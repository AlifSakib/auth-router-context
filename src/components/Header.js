import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between px-16 font-lora">
        <div>
          <a className="btn btn-ghost normal-case text-xl" href="/">
            daisyUI
          </a>
        </div>
        <div className="space-x-8">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
