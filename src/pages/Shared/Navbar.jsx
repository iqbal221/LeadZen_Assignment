import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-2xl text-violet-600">
            LeadZen Assigment
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-md font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/detail">Details</Link>
            </li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
