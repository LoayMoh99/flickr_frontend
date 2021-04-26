/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import './ImagesCR.css';

function ImagesCR(props) {
  const { Url, dateupdated } = props;
  return (
    <>
      {/* <h5 className="text-secondary">April 20, 2021</h5> */}
      {/* <div className="row"> */}

      <div className="column_adj">

        <img id="content" src={Url} alt="cute dog" />

      </div>
      {/*
        <div className="column_adj">
          <a href="https://picsum.photos/seed/picsum/200/300" target="_blank" rel="noreferrer">
            <img id="content" src="https://picsum.photos/seed/picsum/200/300" alt="cute dog" />
          </a>
        </div>

        <div className="column_adj">
          <a href="https://picsum.photos/seed/picsum/200/300" target="_blank" rel="noreferrer">
            <img id="content" src="https://picsum.photos/seed/picsum/200/300" alt="cute dog" />
          </a>
        </div> */}

      {/* </div> */}
    </>
  );
}

export default ImagesCR;
