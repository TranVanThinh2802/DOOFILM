import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import ItemFilm from "../../Components/ItemFilm";
import { GridList, GridListTile } from "@material-ui/core";
import DataFilm from "./data";
import { Pagination, Autocomplete } from "@material-ui/lab";
import TextField from '@material-ui/core/TextField';
import Datafilm from './datafilm';
import Combobox from '../../Components/ComboBox'
import DatanStylefilm from './stylefilm'
import Datangongu from './datangongu'
import Sapxep from './sapxep'
import Datadanhgia from './datadanhgia'
import {Link } from "react-router-dom";
import {loadListFilmAction} from '../../Redux/Action/filmActions'
import {loadFindFilmAction} from '../../Redux/Action/findFilmAction'





function CustomMain() {

  const dispatch = useDispatch();
  
  
 

  // call API film từ serve
  const {listFilm} = useSelector(function(state){
    return state.film;
    // return state.findFilm
  })

  useEffect(() => {
    dispatch(loadListFilmAction())
  },[])

  

  //--------------

  const onChange = (event) =>{
    console.log(event.target.value)
    dispatch(loadFindFilmAction({key_word:event.target.value}))
  }
  

  return (
    <div>
    
      <div className={style.nav_right}>
        <div className={style.search}>
          <FontAwesomeIcon
            className={style.icon_search}
            icon={faSearch}
          ></FontAwesomeIcon>{" "}
          <input className = {style.finFm} placeholder="Find movie, TV shows" type={"text"} onChange = {onChange}></input>
        </div>
        <div className={style.header_right}>
          
            <div className = {style.navHeader} >
            <h1 style = {{fontWeight:"800"}} className = {style.homePage}>DOOFILM</h1>
              <Combobox className = "navChild" data = {Datafilm} nameCbb = "Thể loại"/>
              <Combobox nameCbb = "Ngôn ngữ" data = {Datangongu}/>
              <Combobox nameCbb = "Kiểu Phim" data = {DatanStylefilm} />
              <Combobox nameCbb = "Đánh giá" data = {Datadanhgia}/>
              <Combobox nameCbb = "Sắp Xếp"  data = {Sapxep}/>
            </div>
      
        </div>
      
      
      
        {/* <ItemFilm /> */}
        <GridList className={style.list_film} cellHeight={"auto"} cols={4}>
        {/* thay DataFilm = listFilm.data.map sẽ lấy được database từ serve */}
          {listFilm.data.map((item, index) => (
            <GridListTile key = {index}>
              <ItemFilm
                nameFilm={item.ten_phim}
                image={item.image}
                content={item.tieu_de}
                Category={item.Category}
                key={index}
              ></ItemFilm>
            </GridListTile>
          ))}
        </GridList>

        <div className={style.pagination}>
          <Pagination count={10} color="secondary" />
        </div>

        <div className = {style.login}>
        <button className = "btn btn-primary hw"><Link style = {{color:"white"}} to = '/UserLogin'>Login</Link></button>
        </div>
      </div>
    </div>
  );
}
export default CustomMain;






















