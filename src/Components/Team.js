//import users from '../users.json'
import _ from 'lodash'
import User from './User'
import {useState, useEffect} from 'react'
const Team = ({team}) => {
    const [users, setUsers]=useState([])
    useEffect(() => {
        const getUser= async()=>{
          const userFromServer = await fetchUser()
          setUsers(userFromServer)
        }
        getUser()
    }, [])
    //fetch user
    const fetchUser = async()=>{
        const res= await fetch('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/')
        const data = await res.json()
        return data
    }
    return (
        <div className='task'>
             <button onClick={(Event)=>{
                filterUser(team.id)
                }
            } className='task'>{team.name}</button>
            <div id="divUser" style={{display:'none'}}>
                 {users.map((user)=>(
                    <User key={user.id} user={user} /> 
            ))}   
        </div>
        </div>
    )
     function filterUser(val){
         document.getElementById("divUser").style.display='block';
         
        const filterUserName = _.filter({users}, function (data) {
         
            return data[0].teamId[0] == val;
        });
        console.log(filterUserName)
        //map the filtered dat on UI
        const newEmojipedia = filterUserName.map(function(filterUserName) {
        return filterUserName
        });
    } 
}
export default Team
