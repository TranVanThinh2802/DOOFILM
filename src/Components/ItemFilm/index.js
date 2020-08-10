import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CustomMyList(props) {
    
  return (
    <Link to={`/Film/${props.id}`}>
      <span className={style.box}>
        <iframe
          src={props.image}
          style={{ width: "100%", height: "300px" }}
        ></iframe>
        <p className={style.infor_film}>{props.content}</p>
        <div className={style.infor}>
          <div className={style.title}>
            <p className={style.name}> {props.nameFilm}</p>
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
