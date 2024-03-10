import React from "react";

const Nav = () => {
  return (
    <div className="h-[10vh] w-full px-[135px] grid grid-cols-5 items-center">
      <div className="">Logo</div>
      <ul className="w-full col-start-3 col-span-full flex items-center gap-12 font-roboto">
        <li>MAIN</li>
        <li>GALLERY</li>
        <li>PROJECTS</li>
        <li>CETIFICATIONS</li>
        <li>CONTACTS</li>
      </ul>
    </div>
  );
};

export default Nav;
