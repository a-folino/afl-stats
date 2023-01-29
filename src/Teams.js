import { Link } from "react-router-dom";

const Teams = ({teams}) => {

    return ( 
        <div className="teams">
            {teams.map((team) => (
                <Link to={`/team/${team.id}`}>
                    <div key={team.id} className="team">
                        <h2>{team.name}</h2>
                        <h3>{team.abbrev}</h3>
                    </div>
                </Link>
                ))
            }
        </div>
    );
}
 
export default Teams;
