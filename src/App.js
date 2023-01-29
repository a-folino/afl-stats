import './index.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import TeamMatches from './TeamMatches';
import RoundMatches from './RoundMatches';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    try {
      const fetchTeams = async () => {
        const response = await fetch('https://api.squiggle.com.au/?q=teams');
        if (!response.ok) throw Error('API NOT WORKING');
        const data = await response.json();
        setTeams(data.teams)
      }
      
      fetchTeams()
    } catch (err) {
      console.log(err)
    }
  }, [])

  

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home teams={teams} />} />
          <Route path="/team/:id" element={<TeamMatches />} />
          <Route path="/round/:id" element={<RoundMatches />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
