import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(toyData => setToys(toyData))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addToy = newToy => {
    setToys(currentToys => {
      const newToys = [...currentToys]
      newToys.push(newToy)
      return newToys
    }) 
  }

  function handleDonateToy(id){
    let donateToy = toys.filter((toy) => {
      if (toy.id !== id)
        return true
    })
    setToys(donateToy)
  }
  
  function handleAddLike(id){
      let updateToys = toys.map((toy) => {
        if (toy.id === id) {
          toy.likes += 1
        } 
          return toy
      })
      setToys(updateToys)
      
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(toys.filter((toy) => toy.id == id))
      }).then(response => response.json())
      .then(handleAddLike);
    }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDonateToy={handleDonateToy} handleAddLike={handleAddLike}/>
    </>
  );
}

export default App;
