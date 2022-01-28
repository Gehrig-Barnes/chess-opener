import '../css/SubmitOpening.css'
import React, { useState, useEffect } from 'react';

function SubmitOpening({ onAddOpening }) {

  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [color, setColor] = useState('')
  const [image, setImage] = useState('')
  const [moves, setMoves] = useState('')
  const [link, setLink] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const newOpening = {
      name,
      difficulty,
      color,
      image,
      moves,
      link
    };

    fetch("http://localhost:3000/openings", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newOpening)
    })
      .then((r) => r.json())
      .then((newOpening) => {
        onAddOpening(newOpening)
      })
  }



  return (
    <div class="page">
      <div class="borderDiv">
        <div class="form">
          <section class="insert">
            <form onSubmit={handleSubmit}>
              <h3 class="title">Add New Opening</h3>
              <label htmlFor="name">Name</label>
              <input
                class="inputAddOpening"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
              <label htmlFor="difficulty">Difficulty</label>
              <select
                class="inputAddOpening"
                name="difficulty"
                id="name"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option>select</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <label htmlFor="">Color</label>
              <select
                class="inputAddOpening"
                name='color'
                id='color'
                value={difficulty}
                onChange={(e) => setColor(e.target.value)}
              >
                <option>select</option>
                <option>white</option>
                <option>black</option>
              </select>

              <label htmlFor="image">Image</label>
              <input
                class="inputAddOpening"
                type="text"
                name='image'
                id='image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              <label htmlFor="moves">Moves</label>
              <input
                class="inputAddOpening"
                type="text"
                name="moves"
                id="moves"
                value={moves}
                onChange={(e) => setMoves(e.target.value)}
              />

              <label htmlFor="link">Link</label>
              <input
                class="inputAddOpening"
                type="text"
                name="link"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <div>
                <input
                  class="submit"
                  type='submit'
                  name='submit'>
                </input>
              </div>
            </form>

            <h3>{name}</h3>
            <h3>{difficulty}</h3>
            <h3>{color}</h3>
            <h3>{image}</h3>
            <h3>{moves}</h3>
            <h3>{link}</h3>

          </section>
        </div>
      </div>
    </div>
  );
}

export default SubmitOpening;  