import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';


function HistoricPlayerDetails() {
    const [player, setPlayer] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3000/players/${id}`)
            .then((r) => r.json())
            .then((player) => {
                setPlayer(player);
                setIsLoaded(true);
            });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    console.log(player)

    return (
        <div>
            <h2>{player.name}</h2>
            <img src={player.image} />
            <h4>Birthplace: {player.birthplace}</h4>
            <h4>Years: {player.years}</h4>
            <h4>Facts: {player.facts}</h4>
            {/* <iframe width="420" height="315"
        src={player.link}>
      </iframe> */}
        </div>
    );
}

export default HistoricPlayerDetails;