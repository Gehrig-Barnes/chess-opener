import '../css/OpeningDetails.css'
import React, { useEffect, useState } from "react";
import {useParams, useHistory, Link} from 'react-router-dom';


function OpeningDetails() {
  const [opening, setOpening] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);

  const {id} = useParams();

  const history = useHistory();
  

  useEffect(() => {
    fetch(`http://localhost:3000/openings/${id}`)
      .then((r) => r.json())
      .then((opening) => {
        setOpening(opening);
        setIsLoaded(true); 
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

console.log(opening)

  return (
  <div>
    <img class="img"src={opening.image}/>
    <h2>{opening.name}</h2>
    <Link onClick={() => history.goBack()}>Go Back</Link>
    <h4>difficulty: {opening.difficulty}</h4>
    <h4>color: {opening.color}</h4>
    <h4>Moves: {opening.moves}</h4>
    <iframe class="iframe" width="1000" height="666"
      src={opening.link}>
    </iframe>
    
  </div>
  );
}

export default OpeningDetails; 