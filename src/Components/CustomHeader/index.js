import React, { useState, useEffect } from 'react';
import style from './style.module.css'
import { Drawer, Button } from 'rsuite';
import { Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faLaptop, faPlayCircle, faDove, faCamera, faStar, faVideo, faVideoSlash, faTv, faTablet  } from '@fortawesome/free-solid-svg-icons'


function CustomHeader() {
  // const [isShow, setIsShow] = useState(false)
  let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  return (
    <React.Fragment>
      <header>
        <nav>

          {/* <Button onClick = {()=>setIsShow(!isShow)}> Clickffff me</Button> */}
          <div className={style.nav_left}>
            <div style={{ height: height - 100 }} className={style.title}>
              <div className={style.left}>
                <h1 style={{ paddingTop: 50 }}><a href = "Home"> DOO.NET</a></h1>
                <div className={style.left_top}>
                  {/* <Link style={{ paddingTop: "30px" }} className={style.text_link} to='/Film'>Phim</Link> */}
                  <Link style={{ paddingTop: "30px" }} className={style.text_link} to='/Seris'>Seris</Link>
                  <Link className={style.text_link} to='/MyList'>Danh sách của tôi</Link>
                </div>


                <div className={style.left_center}>
                  {/* <Link className={style.text_link} to='/all-film' ><FontAwesomeIcon className={style.icon_child_center} icon={faFilm}></FontAwesomeIcon> Tất cả phim</Link> */}
                  <Link className={style.text_link} to='/Features'><FontAwesomeIcon className={style.icon_child_center} icon={faStar}></FontAwesomeIcon>Phim truyện</Link>
                  <Link className={style.text_link} to='/Documents'><FontAwesomeIcon className={style.icon_child_center} icon={faVideo}></FontAwesomeIcon>Phim tài liệu</Link>
                  <Link className={style.text_link} to='/Shorsy'><FontAwesomeIcon className={style.icon_child_center} icon={faVideoSlash}></FontAwesomeIcon>Phim ngắn</Link>
                  <Link className={style.text_link} to='/Show'><FontAwesomeIcon className={style.icon_child_center} icon={faTv}></FontAwesomeIcon>Chương trình TV</Link>
                  <Link className={style.text_link} to='/About'><FontAwesomeIcon className={style.icon_child_center} icon={faTablet}></FontAwesomeIcon>Về chúng tôi</Link>
                  <Link className={style.text_link} to='/PlayMovie'></Link>
                  <Link className={style.text_link} to='/Admin'></Link>
         
         
                </div>
                <div className={style.icon}>

                  <FontAwesomeIcon className={style.icon_child} style = {{color: '386BBA'}} icon={faLaptop}></FontAwesomeIcon>

                  <FontAwesomeIcon className={style.icon_child} style = {{color: 'E2BED8'}} icon={faPlayCircle}></FontAwesomeIcon>
                  <FontAwesomeIcon className={style.icon_child} style = {{color: '439CE1'}} className={style.icon_child} icon={faDove}></FontAwesomeIcon>
                  <FontAwesomeIcon className={style.icon_child} style = {{color: 'E090DA'}} icon={faCamera}></FontAwesomeIcon>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </React.Fragment>

  );
}

export default CustomHeader;  