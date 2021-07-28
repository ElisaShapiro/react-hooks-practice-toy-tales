import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDonateToy, handleAddLike }) {
  return (
    <div id="toy-collection">{toys.map((toy) => {
      return (
        <ToyCard key={toy.id} toy={toy} handleDonateToy={handleDonateToy} handleAddLike={handleAddLike}/>
      )})}
    </div>
  );
}

export default ToyContainer;
