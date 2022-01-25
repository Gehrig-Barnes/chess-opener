import React from 'react';
import HistoricPlayersCard from './HistoricPlayersCard'

function HistoricPlayersContainer({ players }) {
    return (
        <div>
            {players.map((player) => {
                return (
                    <HistoricPlayersCard key={player.id} player={player} />)
            })}
        </div>
    );
}

export default HistoricPlayersContainer;




// return a map that returns the historic player card component for each player
// in the historic player card component, pass the invidivual player prop from ^
// destructure the prop, then populate the jsx with the information
