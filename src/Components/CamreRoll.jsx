/* eslint-disable linebreak-style */
/* eslint-disable react/style-prop-object */
/* eslint-disable linebreak-style */
import React from 'react';
import ImagesCR from './ImagesCR';
import Modal from './Modal';

function CamreRoll() {
  const images = [{ Url: 'https://picsum.photos/id/237/200/300', dateuploaded: new Date('2019-05-28'), datetaken: new Date('2019-05-19') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }];
  // const sortedimagesuploaded = images.slice().sort((a, b) => b.dateuploaded - a.dateuploaded);
  //  const sortedimagestaken = images.slice().sort((a, b) => b.datetaken - a.datetaken);
  // eslint-disable-next-line no-unused-vars
  //   const { boolindicator, setboolindicator } = useState(0);
  // its role is to indicate whether we are filtering by dateuploaded (0) or by datetaken (1)
  const filterupload = (img) => {
    img.sort((a, b) => b.dateuploaded - a.dateuploaded);
  };
  const filtertaken = (img) => {
    img.sort((a, b) => b.datetaken - a.datetaken);
  };

  return (

    <>

      <ul className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu">
              <ul>
                <a className="dropdown-item" onClick={() => filterupload(images)} href="/#">Date uploaded</a>
                <a className="dropdown-item" onClick={() => filtertaken(images)} href="/#">Date taken</a>
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
                // dateuploaded={image.dateuploaded}
                // datetaken={image.datetaken}
              />
            )) }
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}

export default CamreRoll;
