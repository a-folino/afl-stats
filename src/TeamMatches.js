/* eslint-disable eqeqeq */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TeamMatches = () => {
    const {id} = useParams();
    const [games, setGames] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const loadTeamGames = async () => {
                const response = await fetch(`https://api.squiggle.com.au/?q=games;year=2022;team=${id}`);
                if (!response.ok) throw Error('API NOT WORKING');
                const data = await response.json();
                setGames(data.games);
                setLoading(false);
            };

            loadTeamGames()
        } catch (err) {
            console.log(err)
        }
    }, [id])

    const handlePageTitle = ()=> {
        if (id == games[0].hteamid && !isLoading) {
            return games[0].hteam + ' games'
        } else if (id == games[0].ateamid && !isLoading) {
            return games[0].ateam + ' games'
        } else {
            return <p>loading...</p>
        }
    }
    
    return ( 
        <div className="matches-page">
            {!isLoading &&
                <>
                    <button className="back-button" onClick={() => navigate(-1)}>Back</button>
                    <h1 className="page-title">{handlePageTitle()}</h1>
                    <div className="matches">
                        {games.map(game => (
                            <div key={game.id} className={`match ${id == game.winnerteamid ? 'win' : 'loss'}`}>
                                <Link to={`/round/${game.round}`}><h2 className="hover">Round {game.round}</h2></Link>
                                <span><Link to={`/team/${game.hteamid}`}><h2 className="hover">{game.hteam}</h2></Link> vs <Link to={`/team/${game.ateamid}`}><h2 className="hover" >{game.ateam}</h2></Link></span>
                                <p>{game.hgoals}.{game.hbehinds} ({game.hscore}) - {game.agoals}.{game.abehinds} ({game.ascore})</p>
                                <p>{game.venue}</p>
                                <p>{game.date}</p>
                            </div>
                            ))
                        }
                    </div>
                </>
            }
        </div>
    );
}
 
export default TeamMatches;
