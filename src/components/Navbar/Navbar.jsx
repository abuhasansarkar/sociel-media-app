import React, { useContext } from "react";
import "./navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";

import userImg from "../../assets/social-media.jpg";
import { ThemeModeContext } from "../../contexts/themeModeContext/ThemeModeProvider";

const Navbar = () => {
  const {themeModeToggle, darkModeTheme} = useContext(ThemeModeContext);
  return (
    <div className="navbar">
      <div className="left-side">
        <Link>
          <strong>ProSociel</strong>
        </Link>
        <HomeIcon className="icon"/>
        {
          !darkModeTheme ? <DarkModeIcon className="icon" onClick={themeModeToggle} /> : <WbSunnyIcon className="icon" onClick={themeModeToggle} />
        }
        
        <AppsIcon className="icon"/>
        <div className="search">
          <input type="text" placeholder="Search Here..." />
          <SearchIcon className="icon" />
        </div>
      </div>
      <div className="right-side">
        <AccountCircleRoundedIcon className="icon"/>
        <EmailIcon className="icon"/>
        <NotificationsActiveIcon className="icon"/>
        <div className="user">
          <img src={userImg} alt="user" />
          <strong>UserName</strong>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
