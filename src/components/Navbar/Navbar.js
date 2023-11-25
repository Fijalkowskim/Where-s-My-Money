import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="w-full h-16 shadow-md flex items-center justify-center gap-10 px-20 mb-10">
      <div className=" text-center text-4xl tracking-wide font-semibold text-gray-800 mr-auto font-logo">
        Where's My Money?
      </div>
      <NavbarItem text="Details" />
      <NavbarItem text="Categories" />
      <NavbarItem text="Hisotry" />
    </div>
  );
}

export default Navbar;
