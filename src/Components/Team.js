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
        const res= await fetch('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/user/')
        const data = await res.json()
        return data
    }
    return (
        <div className='task'>
            <button onClick={(Event)=>{
                filterUser(team.id)
                }
            }>{team.name}</button>
            {users.map((user)=>(
        <User key={user.id} user={user} />
        ))} 
           
        </div>
    )
    function filterUser(val){
        const filterUserName = _.filter({users}, function (data) {
            console.log(data)
            return data.id == val;
        });
        const filterUserlist = filterUserName.map(function(filterUserName) {
            return filterUserlist;
        });
    }
}
export default Team
