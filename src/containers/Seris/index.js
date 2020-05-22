import React from "react";
import CustomHeader from "../../Components/CustomHeader/index";
import style from "./style.module.css";
import ItemFilm from "../../Components/ItemFilm";
import { Pagination } from "@material-ui/lab";

function Seris() {
  return (
    <div className={style.main}>
      <div className={style.left}>
        <CustomHeader />
      </div>

      <div className={style.right}>
        <div className={style.film_kd}>
          <h2>Phim Kinh Dị</h2>
          <ItemFilm
            nameFilm="asd"
            content="đây là thịnh"
            image="imgs/sangtao.jpg"
          />
        </div>
        <div className={style.film_hai}>
          <h2>Phim Hài Hước</h2>
          <ItemFilm
            nameFilm="asd"
            content="đây là thịnh"
            image="imgs/sangtao.jpg"
          />
        </div>
        <div className={style.hanhdong}>
          <h2>Phim Hài Hước</h2>
          <ItemFilm
            nameFilm="asd"
            content="đây là thịnh"
            image="imgs/sangtao.jpg"
          />
        </div>
        <div className={style.film_tinhcam}>
          <h2>Phim Hài Hước</h2>
          <ItemFilm
            nameFilm="asd"
            content="đây là thịnh"
            image="imgs/sangtao.jpg"
          />
        </div>
      </div>
      <div className={style.pagination}>
        <Pagination count={10} color="secondary" />
      </div>
    </div>
  );
}

export default Seris;
