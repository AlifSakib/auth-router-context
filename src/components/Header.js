import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error();
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between px-16 font-lora">
        <div>
          <Link to="/" className="btn btn-ghost normal-case text-xl" href="/">
            Firebase Auth
          </Link>
        </div>
        <div>{user?.email && <span>Wellcome, {user.email}</span>}</div>
        <div className="space-x-8">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
          {user?.email ? (
            <button onClick={handleLogout} className="btn btn-sm">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button onClick={handleLogout} className="btn btn-sm">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
