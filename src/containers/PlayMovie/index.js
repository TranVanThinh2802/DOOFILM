import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import CustomHeader from "../../Components/CustomHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { detailFilmAction } from "../../Redux/Action";
// import list from "@containers/Features/data";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";


function PlayMovie(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [dataFilm, setDataFilm] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();


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

  // const dowload = () =>{
    
  //    `https://drive.google.com/u/0/uc?id=${dataFilm.link_trailer}&export=download`
  //   // alert("vo day")

  // }

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
              width="21rem"
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
          <div style={{ width: "23rem", marginTop: "15%" }}>
            <div className="card-body">
              <h3
                style={{
                  padding: "5px",
                  fontWeight: "800",
                  fontSize: "35px",
                  textTransform: "uppercase",
                }}
              >
                {dataFilm.ten_phim}
              </h3>

              <div className="d-flex like">
                <div className={style.dowloadFilm}>
                  <a
                    // className={style.dowloadFilm}
                    // target="_blank"
                     href={`https://drive.google.com/u/0/uc?id=${dataFilm.link_trailer}&export=download`}
                   
                  >
                    Dowload
                  </a>
                </div>
              </div>
              <Box pt={2} fontSize="20px" fontWeight="200">
                Nội dung
              </Box>
              <Box pt={2}>{dataFilm.tieu_de}</Box>
            </div>
          </div>

          {/* <div className="d-flex" style={{ width: "21rem" }}>
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
          </div> */}
        </div>

        <div className="col-sm-4">
          <div style={{ width: "13rem", paddingTop: "25%", marginLeft: "5%" }}>
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
      </div>
    </div>
  );
}
export default PlayMovie;
