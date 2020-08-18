import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import ItemFilm from "../../Components/ItemFilm";
import { GridList, GridListTile } from "@material-ui/core";
import DataFilm from "./data";
import { Pagination, Autocomplete, PaginationItem } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Datafilm from "./datafilm";
import Combobox from "../../Components/ComboBox";
import DatanStylefilm from "./stylefilm";
import Datangongu from "./datangongu";
import Sapxep from "./sapxep";
import Datadanhgia from "./datadanhgia";
import { Link, Switch, Route } from "react-router-dom";
import { loadListFilmAction, getFilmAction } from "../../Redux/Action";
import { loadFindFilmAction, updateListFind } from "../../Redux/Action";
import PlayMovie from "../../containers/PlayMovie";

function CustomMain() {
  const dispatch = useDispatch();

  const limit = 8;

  // call API film từ serve
  const {
    page,
    data,
    loading,
    isRefreshing,
    isFull,
    curren_page,
    last_page,
    updateListFind
  } = useSelector(function (state) {
    // return state.film;
    // return state.findFilm
    return state.pageListFilm;
  });

  const handleChange = (event, page) => {
    console.log(page);
    dispatch(
      getFilmAction(
        {
          page,
          limit,
        },
        true
      )
    );
  };

  useEffect(() => {
    dispatch(
      getFilmAction(
        {
          page: 1,
          limit,
        },
        true
      )
    );
  }, []);

  //--------------
  // useEffect(()=>{
  //   dispatch(
  //     getFilmAction(
  //       {
  //         page:1,
  //         limit,
  //         key_word:
  //       },
  //       true
  //     )
  //   );
  // },[])
  //----------------

  const onChange = (event) => {
    const change = (event.target.value);
  // dispatch(loadFindFilmAction({ key_word: event.target.value }));
    dispatch(
      getFilmAction(
        {
          page:1,
          limit,
          key_word:change,
        },
        true
      ),[]
    )
  };

  const handleClick = () =>{
      console.log("asd")
    
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div>
      <div className={style.nav_right}>
        <div className={style.search}>
          <FontAwesomeIcon style = {{cursor:'pointer'}}
            className={style.icon_search}
            icon={faSearch}
            onClick = {handleClick}
          ></FontAwesomeIcon>{" "}
          <input
            className={style.finFm}
            placeholder="Tìm tên phim, diễn viên"
            type={"text"}
            onChange={onChange}
          ></input>
        </div>
        <div className={style.header_right}>
          <div className={style.navHeader}>
            <h1 style={{ fontWeight: "800" }} className={style.homePage}>
              DOOFILM
            </h1>
            {/* <Combobox className="navChild" data={Datafilm} nameCbb="Thể loại" />
            <Combobox nameCbb="Ngôn ngữ" data={Datangongu} />
            <Combobox nameCbb="Kiểu Phim" data={DatanStylefilm} />
            <Combobox nameCbb="Đánh giá" data={Datadanhgia} />
            <Combobox nameCbb="Sắp Xếp" data={Sapxep} /> */}
          </div>
        </div>

        {/* <ItemFilm /> */}
        <GridList className={style.list_film} cellHeight={"auto"} cols={4}>
          {/* thay DataFilm = listFilm.data.map sẽ lấy được database từ serve */}
          {data.map((item, index) => (
            <GridListTile key={index}>
              <ItemFilm
                id={item.id}
                nameFilm={item.ten_phim}
                image={item.poster}
                content={item.tieu_de}
                Category={item.Category}
                key={index}
              ></ItemFilm>
            </GridListTile>
          ))}
        </GridList>
        <div className={style.pagination}>
          <Pagination
            color="secondary"
            count={last_page}
            onChange={handleChange}
            page={page}
          />
        </div>
        <div className={style.login}>
          <button className="btn btn-primary hw">
            <Link style={{ color: "white" }} to="/UserLogin">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CustomMain;
