import { Link } from "react-router-dom";

const Teams = ({teams, handleTeamName}) => {

    return ( 
        <div className="teams">
            {teams.map((team) => (
                <div key={team.id} className="team">
                    <Link to={`/team/${team.id}`}><h2 className="hover">{team.name}</h2></Link>
                    <h3>{team.abbrev}</h3>
                </div>
                ))
            }
        </div>
    );
}
 
export default Teams;