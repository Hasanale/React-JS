import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul className="flex font-mono text-xl gap-10 text-black p-10 justify-center bg-gray-300 ">
          <li className="hover:font-bold">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold underline" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="hover:font-bold">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold underline" : ""}`
              }
              to="about"
            >
              About
            </NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold underline" : ""}`
              }
              to="contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold underline" : ""}`
              }
              to="courses"
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
