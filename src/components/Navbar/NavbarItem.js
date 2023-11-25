import React from "react";

function NavbarItem({ text }) {
  return (
    <a className=" cursor-pointer text-lg px-4 hover:text-gray-700 ">{text}</a>
  );
}

export default NavbarItem;
