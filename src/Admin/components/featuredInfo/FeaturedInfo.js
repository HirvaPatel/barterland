import   './featuredInfo.css'
import { useState,useEffect } from "react";

export default function FeaturedInfo() {
  const [users,setUser] = useState([]);  
    const api_url="http://localhost:8080/api/users";
    useEffect(()=>{
        fetch(api_url)
        .then(resp=>resp.json())
        .then(resp=>{setUser(resp.users)})
    },[])
    const length = users.length;
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Number of Users</span>
        <div className='featuredUserContainer'>
          <span className='featuredUser'>{length}</span>
        </div>
          </div>  
          
          <div className='featuredItem'>
        <span className='featuredTitle'>Number of Ads</span>
        <div className='featuredUserContainer'>
          <span className='featuredUser'>2,415</span>
        </div>
        <span className='featuredSub'>Comapred to last month</span>
          </div> 
      </div>
    
  )
}
