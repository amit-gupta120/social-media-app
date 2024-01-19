import React from "react";
import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Face App</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g" alt=""/>
          <span>Amit Gupta</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
