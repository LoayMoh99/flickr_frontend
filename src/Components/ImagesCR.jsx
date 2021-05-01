/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import './ImagesCR.css';

function ImagesCR(props) {
//   const { Url, dateupdated } = props;
  const { Url } = props;
  return (
    <>
      {/* <h5 className="text-secondary">April 20, 2021</h5> */}
      {/* <div className="row"> */}

      <div className="column_adj">

        <img className="img-responsive" id="content" src={Url} alt="image_flickr" onClick={() => { props.onEdit(props.id); }} />

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
