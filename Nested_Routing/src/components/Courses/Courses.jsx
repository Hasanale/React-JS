import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Courses() {
  return (
    <div className="pt-10">
      {/* <div className="text-white text-5xl text-center p-10">Courses </div> */}
      {/* <div className="text-white gap-11 justify-center flex p-10 text-3xl font-mono">
        <NavLink
          to="/courses/undergraduate"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-gray-200 p-4 bg-gray-200 text-black"
              : "border-2 border-gray-200 p-4"
          }
        >
          Undergraduate Programs
        </NavLink>
        <NavLink
          to="/courses/graduate"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-gray-200 p-4 bg-gray-200 text-black"
              : "border-2 border-gray-200 p-4"
          }
        >
          Graduate Programs
        </NavLink>
        <NavLink
          to="/courses/phd"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-gray-200 p-4 bg-gray-200 text-black"
              : "border-2 border-gray-200 p-4"
          }
        >
          PHD Programs
        </NavLink>
      </div> */}
      <Outlet />
    </div>
  );
}

export default Courses;
