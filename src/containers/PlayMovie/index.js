import React, {useEffect, useState} from "react";
import style from "./style.module.css";
import CustomHeader from "../../Components/CustomHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import {detailFilmAction} from '../../Redux/Action/detailFilmActions'
// import list from "@containers/Features/data";
import { useSelector, useDispatch } from "react-redux";
import{Box} from '@material-ui/core'




function PlayMovie(props) {
  const dispatch = useDispatch();
  let {id} = useParams();
  const [dataFilm, setDataFilm] = useState({});
  

  useEffect(()=>{
    //dispatch gui payload la id  
    dispatch(detailFilmAction(id, function(data){
      // code ==200 chay function
      // update lai DataFilm
        setDataFilm(data);
      }
    ));
  },[])
  

    useEffect(()=>{
      console.log(dataFilm, "change")
    },[dataFilm])

    console.log(id)

    return (
    <div className={style.main}>
      <div className={style.left}>
        <CustomHeader />
      </div>
      <div className={style.right}>
      <div className="row">
        <div className="col-sm-4">
          <div className="card" style={{ width: "21rem" }}>
            <iframe
              src = {dataFilm.poster}
              style={{ height: "450px" }}
              className="card-img-top"
            ></iframe>
            <div
              className=" card-body d-flex position-absolute bg"
              style={{
                top: "82.5%",
                background: "rgba(0, 0, 0, 0.5)",
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <a className="btn btn-success" style={{ marginRight: "10px" }}>
                <Link to="/">Dowload</Link>
              </a>
              <a className="btn btn-danger" style={{ marginRight: "10px" }}>
                <Link to="/">Trailer</Link>
              </a>
              <a className="btn btn-info">
                <Link to="/ActionFilm">Xem phim</Link>
              </a>
             
            </div>
          </div>
          <Box boxShadow = {3} p= {2} mb = {5} className = {style.PlayMovietitle}>
          <Box color = "#FF9900">NỘI DUNG PHIM</Box>
            <p>{dataFilm.tieu_de}</p>
          </Box>
        </div>
        
        <div className=" titleFilm col-sm-4 " style={{ marginLeft: "70px" }}>
          <div className="card" style={{ width: "21rem" }}>
            <div className="card-body">
              <h3>{dataFilm.ten_phim}</h3>
              <p>Thời lượng: {dataFilm.thoi_luong} phút</p>
              <p>Năm sản xuất: {dataFilm.nam_san_xuat}</p>
              <p>Quốc gia: {dataFilm.ten_quoc_gia}</p>
              <p>Kiểu phim: {dataFilm.kieu_phim}</p>
              <p>Đạo diễn:Updating....</p>
              <p>Diễn viên:Updating...</p>
              <p>Thể loại: {dataFilm.the_loai_phim}</p>
              <div className="d-flex like">
                <a
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "5px", color: "white" }}
                    icon={faThumbsUp}
                  ></FontAwesomeIcon>
                  <Link to="">Thích</Link>
                </a>
                <a className="btn btn-primary">
                  <Link to="">Chia sẻ</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="card d-flex" style={{ width: "21rem" }}>
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
                <p className={style.raiting} style={{ marginLeft: "10px" }}>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default PlayMovie;
