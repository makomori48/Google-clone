import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import MicIcon from "@material-ui/icons/Mic";

function Search() {
  return (
    <div className="search">
      <div className="ggimg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          alt=""
        />
      </div>

      <div className="search__bar">
        <div className="search__icon">
          <SearchIcon />
        </div>
        <div className="search__input">
          <input className="inp" />
        </div>
        <div className="search__keyb">
          <KeyboardIcon />
        </div>
        <div className="search__mic">
          <MicIcon />
        </div>
      </div>

      <div className="bt__container">
        <div className="btn1">
          <button>ค้นหาด้วย Google</button>
        </div>
        <div className="btn2">
          <button>ดีใจจัง ค้นแล้วเจอเลย</button>
        </div>
      </div>
      
      <small className='ptext' >แสดง Google ใน: English</small>





    </div>
  );
}

export default Search;
