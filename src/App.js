import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false)
  
  let sidebar = open ? "sidebar active" : "sidebar"

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
    <div className={sidebar}>
      <div className="logo_content">
        <div className='logo'>
          <i className='bx bx-user'></i>
          <div className='logo_name'>CodingLab</div>
        </div>
        <i onClick={handleClick} className='bx bx-menu' id="btn"></i>
      </div>
      <ul className="nav_list">
        <li>
          <a href="Search">
            <i className="bx bx-search"></i>
            <input type='text' placeholder="Search..."/>
          </a>
        </li>
        <li>
          <a href="Dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="User">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </a>
        </li>
        <li>
          <a href="Messages">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="Analytics">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </a>
        </li>
        <li>
          <a href="FileManager">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </a>
        </li>
        <li>
          <a href="Order">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Order</span>
          </a>
        </li>
        <li>
          <a href="Saved">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </a>
        </li>
        <li>
          <a href="Setting">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </a>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            {/* <img src="" alt=""/> */}
            <div className="name_job">
              <div className="name">Jorge León</div>
              <div className="job">Web Designer</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </div>
      </div>
    </div>
    <div className="home_content">
      <div className="text">Home Content</div>
    </div>
    </>
  );
}

export default App;
