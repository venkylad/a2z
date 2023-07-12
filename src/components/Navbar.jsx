import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userExists = localStorage.getItem("user");
  const navLinkActive = "text-lg md:text-xl font-bold text-black underline";
  const navLinkClass = "text-lg md:text-xl text-white font-bold ";

  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="flex justify-around py-5 bg-sky-600 underline-offset-4">
      <ul className="flex space-x-6 md:space-x-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? navLinkActive : navLinkClass
            }
            to="/dashboard"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? navLinkActive : navLinkClass
            }
            to="/create"
          >
            Create Ticket
          </NavLink>
        </li>
      </ul>
      {userExists ? (
        <button
          onClick={logoutUser}
          className="bg-slate-100 shadow-md rounded px-3 py-1 font-medium"
        >
          Logout
        </button>
      ) : (
        <Link to="/">
          <button className="bg-slate-100 shadow-md rounded px-3 py-1 font-medium">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
