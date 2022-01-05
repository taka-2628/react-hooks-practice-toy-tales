import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLikesUpdate, onDonate }) {
  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard key={toy.id} toy={toy} onLikesUpdate={onLikesUpdate} onDonate={onDonate}/>)}</div>
  );
}

export default ToyContainer;
