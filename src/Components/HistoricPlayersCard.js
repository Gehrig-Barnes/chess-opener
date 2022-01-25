import React from 'react';
import {Link} from "react-router-dom"


function HistoricPlayersCard({ player }) {
    const { name, image, birthplace, years, facts } = player;
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={image} />
                <h3>{years}</h3>
                <h3>{birthplace}</h3>
            </div>
            <div>
                <p>{facts}</p>
            </div>
        </div>
    );
}

export default HistoricPlayersCard;