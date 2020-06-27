import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Drawer, Button } from "rsuite";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faLaptop,
  faPlayCircle,
  faDove,
  faCamera,
  faStar,
  faVideo,
  faVideoSlash,
  faTv,
  faTablet,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Router } from 'react-router-dom'




function CustomHeader() {
  // const [isShow, setIsShow] = useState(false)
  let height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  return (
    <div className = {style.left}>
        
    <Route render={({ location, history }) => (
        <React.Fragment>
          {/* expanded={true} */} bat tat sideNav
            <SideNav  style = {{background:'#00adef', borderRadius:'10px'}}
                onSelect={(selected) => {

                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle className = {style.tg}/>
                <SideNav.Nav defaultSelected="Home" className = {style.nav}>
                    <NavItem eventKey="Home">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faHome}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to = "/">DOOFILM</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Seris">
                        <NavIcon>
                            <FontAwesomeIcon icon = {faFilm}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/Seris">Seris</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="MyList">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faTv}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/MyList">Danh sách của tôi</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Features">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faStar}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/Features">Phim truyện</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Documents">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faVideo}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/Documents">Phim tài liệu</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Shorsy">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faVideoSlash}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/Shorsy">phim ngắn</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Show">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faTv}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/Show">Chương trình TV</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="About">
                        <NavIcon>
                        <FontAwesomeIcon icon = {faTablet}></FontAwesomeIcon>
                        </NavIcon>
                        <NavText>
                            <Link to  = "/About">Về chúng tôi</Link>
                        </NavText>
                    </NavItem>
                    
                </SideNav.Nav>
            </SideNav>
            {/* <div className={style.icon}>
                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "386BBA" }}
                    icon={faLaptop}
                  ></FontAwesomeIcon>

                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "E2BED8" }}
                    icon={faPlayCircle}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "439CE1" }}
                    className={style.icon_child}
                    icon={faDove}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "E090DA" }}
                    icon={faCamera}
                  ></FontAwesomeIcon>
                </div> */}
              
            
        </React.Fragment>
    )}
    />

      </div>
    
  );
}

export default CustomHeader;





      {/* <nav>
          <div className={style.nav_left}>
            <div style={{ height: height - 100 }} className={style.title}>
              <div className={style.left}>
                <h1 style={{ paddingTop: 50 }}>
                  <Link to="/"> DOO.NET</Link>
                </h1>
                <div className={style.left_top}>
                  <Link
                    style={{ paddingTop: "30px" }}
                    className={style.text_link}
                    to="/Seris"
                  >
                    Seris
                  </Link>
                  <Link className={style.text_link} to="/MyList">
                    Danh sách của tôi
                  </Link>
                </div>

                <div className={style.left_center}>
                  <Link className={style.text_link} to="/Features">
                    <FontAwesomeIcon
                      className={style.icon_child_center}
                      icon={faStar}
                    ></FontAwesomeIcon>
                    Phim truyện
                  </Link>
                  <Link className={style.text_link} to="/Documents">
                    <FontAwesomeIcon
                      className={style.icon_child_center}
                      icon={faVideo}
                    ></FontAwesomeIcon>
                    Phim tài liệu
                  </Link>
                  <Link className={style.text_link} to="/Shorsy">
                    <FontAwesomeIcon
                      className={style.icon_child_center}
                      icon={faVideoSlash}
                    ></FontAwesomeIcon>
                    Phim ngắn
                  </Link>
                  <Link className={style.text_link} to="/Show">
                    <FontAwesomeIcon
                      className={style.icon_child_center}
                      icon={faTv}
                    ></FontAwesomeIcon>
                    Chương trình TV
                  </Link>
                  <Link className={style.text_link} to="/About">
                    <FontAwesomeIcon
                      className={style.icon_child_center}
                      icon={faTablet}
                    ></FontAwesomeIcon>
                    Về chúng tôi
                  </Link>
                  <Link className={style.text_link} to="/PlayMovie"></Link>
                  <Link className={style.text_link} to="/Admin"></Link>
                </div>
                <div className={style.icon}>
                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "386BBA" }}
                    icon={faLaptop}
                  ></FontAwesomeIcon>

                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "E2BED8" }}
                    icon={faPlayCircle}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "439CE1" }}
                    className={style.icon_child}
                    icon={faDove}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className={style.icon_child}
                    style={{ color: "E090DA" }}
                    icon={faCamera}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </nav> */}