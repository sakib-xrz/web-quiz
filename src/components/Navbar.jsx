import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../css/Navbar.css"

const Navbar = () => {
    return (
      <div className="bg-slate-200 mb-20">
        <div className="navbar bg-slate-200 fixed top-0 text-secondary z-50 md:px-12">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to={"/home"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-bold bg-slate-200"
                        : "text-neutral text-semibold"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/statistics"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-bold bg-slate-200"
                        : "text-neutral text-semibold"
                    }
                  >
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/blog"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-bold bg-slate-200"
                        : "text-neutral text-semibold"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>

            <Link
              to={"/"}
              className="btn btn-ghost normal-case text-primary font-bold text-2xl hover:bg-slate-200 "
            >
              WebQuiz
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold bg-slate-200"
                      : "text-neutral font-semibold hover:bg-slate-200 hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/statistics"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold bg-slate-200"
                      : "text-neutral font-semibold hover:bg-slate-200 hover:text-primary"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold bg-slate-200"
                      : "text-neutral font-semibold hover:bg-slate-200 hover:text-primary"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="px-3 mr-4 py-2 text-lg font-semibold rounded text-base-100 bg-accent text-button hover:bg-primary">
              Test YourSelf
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;