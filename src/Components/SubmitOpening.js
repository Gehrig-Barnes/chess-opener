import '../css/SubmitOpening.css';
import React, { useState } from 'react'; // Removed 'useEffect' import

function SubmitOpening({ onAddOpening }) {

  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [moves, setMoves] = useState('');
  const [link, setLink] = useState('');

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
        onAddOpening(newOpening);
      });
  }

  return (
    <div className="page">
      <div className="borderDiv">
        <div className="form">
          <section className="insert">
            <form onSubmit={handleSubmit}>
              <h3 className="title">Add New Opening</h3>
              {/* Your form inputs */}
              <input type='submit' className="submit" name='submit' /> {/* Moved submit button inside the form */}
            </form>

            {/* Removed debug display of state variables */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default SubmitOpening;