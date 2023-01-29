import Ladder from "./Ladder";
import Teams from "./Teams";

const Home = ({teams}) => {

    return (
        <div className="home-page">
            <Ladder />
            <Teams teams={teams} />
        </div>
    )
  
}

export default Home