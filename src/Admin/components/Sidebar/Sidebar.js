import React from 'react'
import "./sidebar.css"
import { LineStyle} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
           
            <ul className='sidebarList'>
            <Link to="/admin" className='link'>
                <li className='sidebarListItem '>
                        <LineStyle  className='sidebarIcons'/> Home
                </li>
                </Link>
                <Link to="/admin/users" className='link'>
                <li className='sidebarListItem '>
                        <PersonIcon  className='sidebarIcons'/> Users
                </li>
                </Link>
                <li className='sidebarListItem'>
                        <ProductionQuantityLimitsIcon className='sidebarIcons'/> Advertisement
                </li>
            </ul>
        </div>
        </div>
        </div>
  )
}
