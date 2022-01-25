import React from 'react';

function SubmitOpening() {
  return (
  <section>
    <form>
      <h3>Add New Opening</h3>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        
      />
      <label htmlFor="difficulty">Difficulty</label>
      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <label htmlFor="color">Color</label>
      <select>
        <option>white</option>
        <option>black</option>
      </select>

      <label htmlFor="image">Image</label>
      <input type="text"/>

      <label htmlFor="moves">Moves</label>
      <input type="text"/>

      <label htmlFor="link">Link</label>
      <input type="text" />



      
    </form>
  </section>
  );
}

export default SubmitOpening;  