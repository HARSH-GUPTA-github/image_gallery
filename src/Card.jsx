import React from "react";

function Card(props) {
  return (
    <>
      <div id="card" className="card col-12 col-sm-5 col-md-3 p-4">
        <img className="card-img" src={props.src} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.category}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
