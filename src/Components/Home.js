import '../css/Home.css'
import React from 'react';
import PlayerCard from './PlayerCard'

function Home({ players }) {
    return (
        <>
            <div class="historic-players">
                <h2>Historic Players</h2>
            </div>
            <div class="player-cards-container">
                {players.map((player) => {
                    return (
                        <PlayerCard
                            key={player.id}
                            name={player.name}
                            image={player.image}
                            birthplace={player.birthplace}
                            years={player.years}
                            facts={player.facts}
                        />)
                })}
            </div>
        </>
    )
}

export default Home; 