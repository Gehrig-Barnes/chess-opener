import React, { useState, useEffect } from 'react';

function SubmitPlayer({ onAddPlayer }) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [birthplace, setBirthplace] = useState('')
    const [years, setYears] = useState('')
    const [facts, setFacts] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const newPlayer = {
            name,
            image,
            birthplace,
            years,
            facts,
        };

        fetch("http://localhost:3000/players", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newPlayer)
        })
            .then((r) => r.json())
            .then((newPlayer) => {
                onAddPlayer(newPlayer)
            })
    }



    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h3>Add New Player</h3>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name='image'
                    id='image'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <label htmlFor="moves">Birthplace</label>
                <input
                    type="text"
                    name="birthplace"
                    id="birthplace"
                    value={birthplace}
                    onChange={(e) => setBirthplace(e.target.value)}
                />

                <label htmlFor="link">Years</label>
                <input
                    type="text"
                    name="years"
                    id="years"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                />
                <label htmlFor="link">Facts</label>
                <input
                    type="text"
                    name="facts"
                    id="facts"
                    value={years}
                    onChange={(e) => setFacts(e.target.value)}
                />
                <div>
                    <input type='submit' name='submit'></input>
                </div>
            </form>

            <h3>{name}</h3>
            <h3>{image}</h3>
            <h3>{birthplace}</h3>
            <h3>{years}</h3>
            <h3>{facts}</h3>

        </section>
    );
}

export default SubmitPlayer;  