import { bodyParser } from "json-server";
import React from "react";

function ToyCard({ toy, handleDonateToy, /*handleAddLike*/ }) {

  function onDonateToy(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    handleDonateToy(toy.id)
  }

  // function onLikeToy(){
  //   const updateToyObj = {
  //     likes: toy.likes +1,
  //   };
  //   fetch(`http://localhost:3001/toys/${toy.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify(updateToyObj)
  //   }).then(response => response.json())
  //   .then(handleAddLike);
  // }


  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button /*onClick={onLikeToy}*/ className="like-btn">Like {"<3"}</button>
      <button onClick={onDonateToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
