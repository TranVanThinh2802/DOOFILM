import React, { useState, useEffect } from 'react';
import style from './style.module.css'
import { Drawer, Button } from 'rsuite';
import { Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function CustomHeader() {
  // const [isShow, setIsShow] = useState(false)
  let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  return (
    <React.Fragment>
      <header>
        <nav>
       <FontAwesomeIcon icon={faCoffee} />
          {/* <Button onClick = {()=>setIsShow(!isShow)}> Clickffff me</Button> */}
          <div className={style.nav_left}>
            
              <div style={{ height: height - 100 }} className={style.title}>
              <div className = {style.left}>
                <h1>MOVIEBAZAR</h1>
               <div className ={style.left_top}>
                  <Link style={{ paddingTop: "30px" }} className={style.text_link} to='/Film'>Film</Link>
                  <Link className={style.text_link} to='/Film'>Series</Link>
                  <Link className={style.text_link} to='/Film'>My List</Link>
               </div>
              
              
                <div className={style.left_center}>
                  <Link className={style.text_link} to='/all-film'>All Flim</Link>
                  <Link className={style.text_link} to='/Features'>Features</Link>
                  <Link className={style.text_link} to='/Documents'>Documents</Link>
                  <Link className={style.text_link} to='/Shorsy'>Shorst</Link>
                  <Link className={style.text_link} to='/Show'>TV Shows</Link>
                  <Link className={style.text_link} to='/About'>About</Link>
                </div>
                <div className={style.icon}>
                  <div style={{ height: "20px", width: "20px" }} />
                </div>
              </div>
              <div className={style.icon}>
                <div style={{ height: "20px", width: "20px" }} />
              </div>
            </div>

          </div>
        </nav>
      </header>
    </React.Fragment>

  );
}

export default CustomHeader;