/* eslint-disable linebreak-style */
/* eslint-disable react/style-prop-object */
/* eslint-disable linebreak-style */
import React from 'react';
import ImagesCR from './ImagesCR';

function CamreRoll() {
  const images = [{ Url: 'https://picsum.photos/id/237/200/300', dateupdated: '20-4-2021' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateupdated: '20-4-2021' }];

  return (

    <>

      <ul className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu">
              <ul>
                <a className="dropdown-item" href="/#">Date uploaded</a>
                <a className="dropdown-item" href="/#">Date taken</a>
              </ul>
            </div>
          </li>

        </div>
      </ul>
      <div className="row">
        <div className="col">
          <nav className="nav flex-column">
            <a className="nav-link active " aria-current="page" href="/#">2021</a>
            <a className="nav-link " href="/#">- April</a>
            <a className="nav-link text-secondary" href="/#">- January</a>
          </nav>
        </div>
        <div className="col-11">
          <div className="row">
            { images.map((image) => (
              <ImagesCR
                Url={image.Url}
                dateupdated={image.dateupdated}
              />
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default CamreRoll;
