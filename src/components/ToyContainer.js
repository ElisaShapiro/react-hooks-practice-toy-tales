import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDonateToy }) {
  return (
    <div id="toy-collection">{toys.map((toy) => {
      return (
        <ToyCard key={toy.id} toy={toy} handleDonateToy={handleDonateToy}/>
      )})}
    </div>
  );
}

export default ToyContainer;
