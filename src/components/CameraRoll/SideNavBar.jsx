/* eslint-disable linebreak-style */
import React from 'react';

function SideNavBar() {
  return (

    <>
      <nav className="nav flex-column">
        <a className="nav-link active " aria-current="page" href="/#">2021</a>
        <a className="nav-link " href="/#">- April</a>
        <a className="nav-link text-secondary" href="/#">- January</a>
      </nav>
    </>
  );
}

export default SideNavBar;
