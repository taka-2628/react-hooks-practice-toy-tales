import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    setToys([...toys, newToy])
  }

  function handleUpdateLikes(updatedToy){
    setToys(toys.map((toy) => {
      if(toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    }))
  }

  function handleDonateToy(donatedToy){
    setToys(toys.filter((toy) => (toy.id !== donatedToy.id)))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLikesUpdate={handleUpdateLikes} onDonate={handleDonateToy}/>
    </>
  );
}

export default App;
