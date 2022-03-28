import   '../../css/featuredInfo.css'
import { useState,useEffect } from "react";

export default function FeaturedInfo() {
  const [users,setUser] = useState([]);  
    const api_url=process.env.REACT_APP_BACKEND_URL + '/api/users';
    useEffect(()=>{
        fetch(api_url)
        .then(resp=>resp.json())
        .then(resp=>{setUser(resp.users)})
    },[])
    const length = users.length;
    const [ads,setads] = useState([]);  
    const ads_api_url=process.env.REACT_APP_BACKEND_URL + '/myads';
    useEffect(()=>{
        fetch(ads_api_url)
        .then(resp=>resp.json())
        .then(resp=>{setads(resp.ads)})
    },[])
    const ads_length = ads.length;  
  
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
          <span className='featuredUser'>{ads_length}</span>
        </div>
          </div> 
              </div>   
      
    
  )
}
