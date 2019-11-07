import React from "react";

function Photo(props) {
  return (
    <div className="photo">
      <h1>{props.title}</h1>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
      <img src={props.url} alt="NASA Photo of the Day" />
    </div>
  );
}

export default Photo;
