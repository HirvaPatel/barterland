import './user.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import FooterSection from '../../../home/js/FooterSection';
import Titlebar from "../../components/TitleBar/Titlebar";

export default function User() {
    const [user,setUser] = useState([]);  
    const params=useParams();
    console.log(params)
    const api_url=`http://localhost:8080/api/users/${params.userId}`;
    useEffect(()=>{
        fetch(api_url)
        .then(resp=>resp.json())
        .then(resp=>{setUser(resp.user[0])})
    },[])
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
                <img src={user.picture} alt="" className='userShowUserUserImage'></img>
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
                        <button className='userUpdateButton'> Update</button>
                        </Link>
                    </div>
            </div>
            
        </div>
        <FooterSection/>
    </div>
  )
}
