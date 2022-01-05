import React from "react";

function ToyCard({ toy, onLikesUpdate, onDonate }) {
  const { name, image, likes} = toy;

  function handleLikeClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: toy.likes + 1})
    })
      .then((res) => res.json())
      .then((updatedToy) => onLikesUpdate(updatedToy))
  }

  function handleDonateClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => onDonate(toy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
