import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import CustomHeader from "../../Components/CustomHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { detailFilmAction } from "../../Redux/Action/detailFilmActions";
// import list from "@containers/Features/data";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@material-ui/core";

function PlayMovie(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [dataFilm, setDataFilm] = useState({});

  useEffect(() => {
    //dispatch gui payload la id
    dispatch(
      detailFilmAction(id, function (data) {
        // code ==200 chay function
        // update lai DataFilm
        setDataFilm(data);
      })
    );
  }, []);

  useEffect(() => {
    console.log(dataFilm, "change");
  }, [dataFilm]);

  console.log(id);

  return (
    <div className={style.main}>
      <div className={style.left}>
        <CustomHeader />
      </div>
      <Box
        style={{ width: "640px", height: "480px", position: "relative" }}
        className={style.PlayMovieFilm}
      >
        <iframe
          src={dataFilm.link_server}
          width="640"
          height="480"
          frameBorder="0"
          scrolling="no"
          seamless=""
          allowFullScreen="allowfullscreen"
        ></iframe>
        <div
          style={{
            width: "80px",
            height: "80px",
            position: "absolute",
            opacity: "0",
            right: "0px",
            top: "0px",
          }}
        >
          &nbsp;
        </div>
      </Box>
      <div className={style.right}>
        {/* <div className="row"> */}
        <div className="col-sm-4">
          <div
            style={{ width: "21rem", height: "480px", position: "relative" }}
          >
            <iframe
              style={{ border: "none" }}
              src={dataFilm.poster}
              style={{ height: "450px" }}
              width = '21rem'
              className="card-img-top"
              frameBorder="0"
              scrolling="no"
              seamless=""
            ></iframe>
            <div
              style={{
                width: "21rem",
                height: "80px",
                position: "absolute",
                opacity: "0",
                right: "0px",
                top: "0px",
              }}
            >
              &nbsp;
            </div>

            <div
              className=" card-body d-flex position-absolute bg"
              style={{
                top: "82.5%",
                // background: "rgba(0, 0, 0, 0.5)",
                width: "100%",
                borderRadius: "8px",
              }}
            ></div>
          </div>
        </div>

        <div className=" titleFilm col-sm-4 " style={{ marginLeft: "3%" }}>
          <div style={{ width: "21rem", marginTop: "15%" }}>
            <div className="card-body">
              <h3 style={{ padding: "5px" }}>{dataFilm.ten_phim}</h3>

              <div className="d-flex like">
                <a className="btn btn-primary">
                  <Link to="">Dowload</Link>
                </a>
              </div>
              <Box pt={2}>
                Nội dung
                <Box pt={2}>{dataFilm.tieu_de}</Box>
              </Box>
            </div>
          </div>
          <div></div>
          <div className="d-flex" style={{ width: "21rem" }}>
            <div className="card-body">
              <p
                style={{
                  color: "yellowgreen",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Đánh giá Phim
              </p>
              <div className={style.start}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <p className={style.raiting} style={{ marginLeft: "10px" }}></p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div style={{ width: "21rem", paddingTop: "25%", marginLeft: "5%" }}>
            <p className={style.dataFilmtitle}>
              Thời lượng:
              <span className={style.dataFilmspan}>
                {dataFilm.thoi_luong} phút
              </span>
            </p>
            <p className={style.dataFilmtitle}>
              Năm sản xuất:{" "}
              <span className={style.dataFilmspan}>
                {dataFilm.nam_san_xuat}
              </span>
            </p>
            <p className={style.dataFilmtitle}>
              Quốc gia:{" "}
              <span className={style.dataFilmspan}>
                {dataFilm.ten_quoc_gia}
              </span>
            </p>
            <p className={style.dataFilmtitle}>
              Kiểu phim:{" "}
              <span className={style.dataFilmspan}>{dataFilm.kieu_phim}</span>
            </p>
            <p className={style.dataFilmtitle}>
              Đạo diễn:<span className={style.dataFilmspan}>Updating....</span>
            </p>
            <p className={style.dataFilmtitle}>
              Diễn viên:<span className={style.dataFilmspan}>Updating...</span>
            </p>
            <p className={style.dataFilmtitle}>
              Thể loại:{" "}
              <span className={style.dataFilmspan}>
                {dataFilm.the_loai_phim}
              </span>
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
export default PlayMovie;
