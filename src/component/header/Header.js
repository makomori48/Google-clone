import React from "react";
import "./Header.css";
import DialpadIcon from "@material-ui/icons/Dialpad";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon />
      </IconButton>

      <IconButton style={{padding: 20 }} >
        <DialpadIcon />
      </IconButton>
      <div className='header__pic' >
        <p>ค้นรูป</p>
      </div>

      <div className='header__gmail' >
        <p>Gmail</p>
      </div>
    </div>
  );
}

export default Header;
