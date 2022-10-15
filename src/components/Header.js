import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between px-16 font-lora">
        <div>
          <Link to="/" className="btn btn-ghost normal-case text-xl" href="/">
            Firebase Auth
          </Link>
        </div>
        <div className="space-x-8">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
