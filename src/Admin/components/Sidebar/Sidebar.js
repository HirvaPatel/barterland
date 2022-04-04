//Author: Hardik Mesvania
import React from "react";
import "../../css/sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem ">
                <PersonIcon className="sidebarIcons" /> Users
              </li>
            </Link>
            <Link to="/myads" className="link">
              <li className="sidebarListItem">
                <ProductionQuantityLimitsIcon className="sidebarIcons" />{" "}
                Advertisement
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
