import Team from './Team'
import Search from './Search'
const TeamOverview = ({teams}) => {
  return (
      <>
      <Search searchList={teams}/>
        {teams.map((team)=>(
        <Team key={team.id} team={team} />
        ))} 
      </>
  )
}
  


export default TeamOverview
