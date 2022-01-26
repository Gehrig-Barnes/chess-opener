import '../css/PlayerCard.css'
import React, {useState} from "react"

function PlayerCard({name, image, birthplace, years, facts}){

    const [show, setShow] = useState(false);

    function handleClick(){
        setShow((show) => !show)
    }

    function showDetail(){
        if (show) {
           return <>
                <h4>{years}</h4>
                <div>
                    <p>{facts}</p>
                </div>
            </>
        } 
    }

    return (

        <div>
            
            <img onClick={handleClick} width="300" height="" src={image}/>
            <h3>{name}</h3>
            <h4>{birthplace}</h4>
            {showDetail()}
            
        </div>
    )
}

export default PlayerCard;