import '../css/PlayerCard.css'
import React, { useState } from "react"

function PlayerCard({ name, image, birthplace, years, facts }) {

    const [show, setShow] = useState(false);

    function handleClick() {
        setShow((show) => !show)
    }

    function showDetail() {
        if (show) {
            return <>
                <div class="factsDiv">
                    <p>{facts}</p>
                </div>
            </>
        }
    }

    return (
        <div class="player-card">
            <img onClick={handleClick} width="300" height="" src={image} />
            <div class="contents">
                <h3>{name}</h3>
                <h4>{birthplace}</h4>
                <h5>{years}</h5>
                {showDetail()}
            </div>
        </div>
    )
}

export default PlayerCard;