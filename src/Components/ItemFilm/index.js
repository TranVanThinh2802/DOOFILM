import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CustomMyList(props) {
    
  return (
    <Link to={`/Film/${props.id}`}>
      <span className={style.box} >
     <div style = {{width:'100%', height:'360px', position:'relative'}}>
        <iframe
            frameBorder = "0"
            allowTransparency = "true"
            scrolling = "no"
            seamless = ""
            src={props.image}
            style={{ width: "100%", height: "350px", border:'none', backgroundColor:'lightgray' }}
          ></iframe>
          {/* <img src = {props.image}></img> */}
        <div style = {{width:"100%", height:'50px', position:"absolute", opacity:"0", right:'0px', top:'0px'}}>&nbsp;</div>

     </div>
        <p className={style.infor_film}>{props.content}</p>
        <div className={style.infor}>
          <div className={style.title}>
            <p style = {{color:'black'}} className={style.name}> {props.nameFilm}</p>
            <p className={style.catagrory}>{props.Category}</p>
          </div>
          <div className={style.start}>
            <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
          </div>
        </div>
      </span>
    </Link>
  );
}

export default CustomMyList;
