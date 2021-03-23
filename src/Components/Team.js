//import users from '../users.json'
import {useState} from 'react'
import User from './User'
const Team = ({team}) => {
   // const[team, setTeam]=useState('')
    const loadUsers=(team)=>{
        console.log(team);
        return loadUsers;
    }
    return (
        <div className='task'>
            <button onClick={(Event)=>{
                loadUsers(Event.target.value);
                }
            }>{team.name}</button>
        </div>
    )
    }
export default Team
