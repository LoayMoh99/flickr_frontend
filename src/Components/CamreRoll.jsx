/* eslint-disable linebreak-style */
import React, { useState } from 'react';

function CamreRoll(props) {
  return (

    <div>
      <ul className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu">
              <ul>
                <li><a className="dropdown-item" href="/#">Date uploaded</a></li>
                <li><a className="dropdown-item" href="/#">Date taken</a></li>
              </ul>
            </div>
          </li>

        </div>
      </ul>
      <div className="col">
        <nav className="nav flex-column">
          <a className="nav-link active" aria-current="page" href="/#">2021</a>
          <a className="nav-link" href="/#">_ April</a>
          <a className="nav-link" href="/#">_ January</a>
        </nav>
      </div>
    </div>

  );
}

export default CamreRoll;
