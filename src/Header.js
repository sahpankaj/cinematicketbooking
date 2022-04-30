import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RocketIcon from "@mui/icons-material/Rocket";
function Header() {
  return (
    <div className="header">
     
      <h2>BookMyShow</h2>
      <div className="header_mid">
        <SearchRoundedIcon className="header_icon" />
        <input
          type="text"
          className="header_input"
          placeholder="Search movie or theatres"
        />
      </div>
      <div className="header_right">
        <RocketIcon className="header_right_icon"/>
        <h3 className="header_right_text">Bhopal</h3>
      </div>
    </div>
  );
}

export default Header;
