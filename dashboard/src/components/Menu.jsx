import React,{useState} from "react";
import {Link} from "react-router-dom";


export default function Menu() {
  const [SelectedMenu,setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen,setIsProfileDropDownOpen] = useState(false);

  const handleMenuClick =(index)=>{
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="images/logo.png" style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(0)}>
              <p className={SelectedMenu === 0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(1)}>
              <p className={SelectedMenu === 1 ? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(2)}>
              <p className={SelectedMenu === 2 ? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(3)}>
              <p className={SelectedMenu === 3 ? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(4)}>
              <p className={SelectedMenu === 4 ? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/analyze" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(5)}>
              <p className={SelectedMenu === 5 ? activeMenuClass:menuClass}>Analyze</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

