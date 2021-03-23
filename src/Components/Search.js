import {useState} from 'react'

const Search = ({searchList}) => {
    const[searchTerm, setSearchTerm]=useState('')
    const filterRecords=(searchTerm)=>{
        console.log(searchList.filter(searchTerm));
    }
    return (
        <>
        <input type='text' placeholder='search...' onChange={(Event)=>{
            filterRecords(Event.target.value);
        }} />
        </>
        
    )
}
export default Search
