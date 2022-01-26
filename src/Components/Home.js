import '../css/Home.css'
import React from 'react';
import PlayerCard from './PlayerCard'

function Home ({players}){
    return (
        <div>
            {players.map((player) => {
                return (
                <PlayerCard
                    key={player.id} 
                    name={player.name} 
                    image={player.image} 
                    birthplace={player.birthplace} 
                    years={player.year} 
                    facts={player.facts}
                />
                )
            })}
        </div>
        
    )
}

export default Home;