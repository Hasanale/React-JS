import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const loacte = useLocation();
  const isCourseActive = loacte.pathname.startsWith("/courses");
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
          <li className="hover:font-bold relative group">
            <span
              role="button"
              className={`${isCourseActive ? "font-bold underline" : ""}`}
            >
              Courses
            </span>

            <ul className="absolute left-0 top-[70%] mt-2 lg:w-[250px]  bg-gray-300 p-4 text-[15px] opacity-0 group-hover:opacity-100 group-hover:visible invisible shadow-2xl transition-opacity duration-500 ease-in-out">
              <li className="border-b-2 border-black p-1">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "bg-black text-white" : "bg-none"} p-1`
                  }
                  to="/courses/undergraduate"
                >
                  Undergraduate Programs
                </NavLink>
              </li>
              <li className="border-b-2 border-black p-1">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "bg-black text-white" : "bg-none"} p-1`
                  }
                  to="/courses/graduate"
                >
                  Graduate Programs
                </NavLink>
              </li>
              <li className="border-b-2 border-black p-1">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "bg-black text-white" : "bg-none"} p-1`
                  }
                  to="/courses/phd"
                >
                  PHD Programs
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
