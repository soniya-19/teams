import Header from './Components/Header'
import TeamOverview from './Components/TeamOverview'
import {useState, useEffect} from 'react'

function App() {
  const [team, setTeams]=useState([])
  useEffect(() => {
    const getTeams= async()=>{
      const teamsFromServer = await fetchTeams()
      setTeams(teamsFromServer)

    }
    getTeams()
  }, [])
  //fetch teams
  const fetchTeams = async()=>{
    const res= await fetch('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/')
    const data = await res.json()
    return data
  }
  return (
    <div className="container">
     <Header />
      <p>Shows the hierarchy of teams</p>
      <TeamOverview teams={team}/>
      </div>
  );
}

export default App;
