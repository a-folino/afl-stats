import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


const RoundMatches = () => {
    const {id} = useParams();
    let [rounds, setRounds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const loadRound = async () => {
                const response = await fetch(`https://api.squiggle.com.au/?q=games;year=2022;round=${id}`);
                if (!response.ok) throw Error('API NOT WORKING');
                const data = await response.json();
                setRounds(data.games);
            };
            
            loadRound()
        } catch (err) {
            console.log(err)
        }
    }, [])

    return ( 
        <div className="rounds-page">
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
        <h1 className="page-title">Games in Round {id}</h1>
            <div className="matches">
                {rounds.map(round => (
                    <div className="match" key={round.id}>
                        <span><Link to={`/team/${round.hteamid}`}><h2 className="hover">{round.hteam}</h2></Link> vs <Link to={`/team/${round.ateamid}`}><h2 className="hover">{round.ateam}</h2></Link></span>
                        <p>{round.hgoals}.{round.hbehinds} ({round.hscore}) - {round.agoals}.{round.abehinds} ({round.ascore})</p>
                        <p>{round.venue}</p>
                        <p>{round.date}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default RoundMatches;