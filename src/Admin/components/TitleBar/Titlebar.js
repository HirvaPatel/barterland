import "./titlebar.css"
import {Link} from "react-router-dom"

export default function Titlebar() {
  return (
        <div className="titlebar">
          <div className="titlebarWrapper">
            <div className="topleft">
              <Link to="/admin" className="link">
                <span className="logo">
                BarterLand
                </span>
                </Link>
                <span className="admin">
                Admin
                </span>
                </div>
              <div className="topright">
                  <img src="https://pixlok.com/wp-content/uploads/2021/02/profile-Icon-SVG.jpg" alt="" className='adminImage'></img>
                  </div>
          </div>
         
        </div>
      );
}
