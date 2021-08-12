import React from "react";

const Cards = ({ image, name, id, link, ctgry }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 cards_div">
        <div className="card">
          <img src={image} className="card-img-top" alt="toolsimage" />
          <div className="card-body">
            <h5 className="card-title">{ctgry}</h5>
            <h1 className="card-text">{name}</h1>
            <a href={link}>Download</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
