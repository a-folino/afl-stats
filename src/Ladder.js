import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Ladder = () => {
    let [ladder, setLadder] = useState([]);

    useEffect(() => {
        try {
            const loadLadder = async () => {
                const response = await fetch(`https://api.squiggle.com.au/?q=standings;year=2022`);
                if (!response.ok) throw Error('API NOT WORKING');
                const data = await response.json();
                setLadder(data.standings);
            }

            loadLadder()
        } catch (err) {
            console.log(err)
        }
    }, [])

    return ( 
        <div className="ladder">
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Team</td>
                        <td>Wins</td>
                        <td>Losses</td>
                        <td>Draws</td>
                        <td>Percentage</td>
                    </tr>
                </thead>
                <tbody>
                {ladder.map(team => (
                    <tr key={team.id}>
                        <td>{team.rank}</td>
                        <td><Link to={`/team/${team.id}`}>{team.name}</Link></td>
                        <td>{team.wins}</td>
                        <td>{team.losses}</td>
                        <td>{team.draws}</td>
                        <td>{team.percentage.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default Ladder;