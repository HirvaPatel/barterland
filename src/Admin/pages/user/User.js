import '../../css/user.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import FooterSection from '../../../home/js/FooterSection';
import Titlebar from "../../components/TitleBar/Titlebar";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";

export default function User() {
    let navigate=useNavigate()
    const [user,setUser] = useState([]);  
    const params=useParams();
    console.log(params)
    const api_url=process.env.REACT_APP_BACKEND_URL+`/api/users/${params.userId}`;
    useEffect(()=>{
        fetch(api_url)
        .then(resp=>resp.json())
        .then(resp=>{setUser(resp.user[0])})
    },[])

    //This will set the user credentials in local storage
    const handleSubmit = (event) => {
    event.preventDefault();
    ReactSession.setStoreType("localStorage");

    ReactSession.set("user_id", user.user_id); 
    ReactSession.set("email",user.email);
    ReactSession.set("first_name",user.first_name);
    ReactSession.set("last_name",user.last_name);
    ReactSession.set("address",user.address);
    navigate("/userupdate");
  }

  return (
    <div className="user">
        <Titlebar/>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            
           </div>
        <div className='userContainer'>
            <div className='userShow'>
            <span className='userShowTitle'>Account Details</span>
                <div className='userShowTop'>
                {user.picture !==undefined &&
                <img src={user.picture} alt="Profile Pic not uploded by User" className='userShowUserUserImage'></img>
                } 
               {user.picture ===undefined &&
                <img src='https://cdn.landesa.org/wp-content/uploads/default-user-image.png' alt="Profile Pic not uploded by User" className='userShowUserUserImage'></img>
                }
                </div>
                <div className='userShowBottom'>
                
                <div className='userShowInfo'>
                <AccountBoxIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>{user.first_name}</span>
               </div>
               <div className='userShowInfo'>
                <AddReactionIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>{user.last_name}</span>
               </div>
               <div className='userShowInfo'>
                <EmailIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>{user.email}</span>
               </div>
               <div className='userShowInfo'>
                <HomeIcon className="userShowIcon"/>
                    <span className='userShowInfoTitle'>{user.address}</span>
               </div> 
                </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>
                    Edit User Profile
                </span>
                <div>
                <Link to="/userregister">
                <button className='userUpdateButton'>Register New User</button>
        
                    </Link>
                </div>
                
                    <div className='userUpdateRight'>
                    <Link to="/userupdate">
                        <button className='userUpdateButton' onClick={handleSubmit}> Update</button>
                        </Link>
                    </div>
            </div>
            
        </div>
        <FooterSection/>
    </div>
  )
}
