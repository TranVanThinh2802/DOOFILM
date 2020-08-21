import React, { Component, useState, useEffect } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import axios from "axios";
import ListFilm from "../ListFilm";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { createFilmAction } from "../../Redux/Action";

const Add = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const [input, setInput] = useState()
  const {
    alert: { code, message, type },
  } = useSelector((state) => state.generic);
  

  const onSubmit = (data) => {
    dispatch(createFilmAction(data));
    alert('Đăng phim thành công')
  };

  const onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  
  const click = () =>{
    setInput("a")
  }


  return (
    <div className={style.right}>
    {/* <p>{input}</p> */}
    {/* <input></input>
    <button onClick = {()=>setInput(click)} >click me</button> */}
      <div
        style={{ maxWidth: "60%" }}
        className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      >
        <form style={{ boxShadow: "0px 6px 14px 1px", padding: "25px" }}>
          <h2>Thêm Phim</h2>
          <div style={{ background: "white" }}>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-signature"></i>Nhập tên phim
              </label>
              <input
                placeholder="Nhập tên phim"
                className="d-flex mb-3"
                name="ten_phim"
                ref={register({ required: true })}
              ></input>
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-images"></i>Nhập link hình ảnh
                
              </label>
              <input
                className="d-flex mb-3"
                name="poster" 
                placeholder="Nhập link hình ảnh"
                ref={register({ required: true })}

              />
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-pen"></i>Nhập kiểu phim
              </label>
              <input
                placeholder="Nhập kiểu phim"
                className="d-flex mb-3"
                aria-invalid={errors.kieu_phim_id <0 && errors.kieu_phim_id>3 ? "true" : "false"}
                name="kieu_phim_id"
                ref={register({ required: true })}
              ></input>
              {/* { errors.kieu_phim_id && (
          <span style = {{position:"absolute", top:"0", left:'0'}} role="alert">
            This field is required
          </span>
        )
      } */}
              <div className = {style.addTheLoai}>
                <p className = {style.nameaaa}>id: Kiểu phim</p>
                <p className = {style.nameaaa}>1: Phim bộ</p>
                <p className = {style.nameaaa}>2: Phim lẻ</p>
              </div>
            </div>
            <div style = {{position:"relative"}} className={style.inputAdd}>
              <label>
                <i class="fas fa-pen"></i>Nhập loại phim
              </label>
              <input
                placeholder="Nhập loại phim"
                className="d-flex mb-3"
                name="loai_phim_id"
                ref={register({ required: true })}
              ></input>
              <div className = {style.addTheLoai}>
                <p className = {style.nameaaa}>id: Thể loại</p>
                <p className = {style.nameaaa}>1: Kinh dị</p>
                <p className = {style.nameaaa}>2: Song hồn</p>
              </div>
              
            </div>

            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-language"></i>Nhập quốc gia
              </label>
              <input
                placeholder="Nhập quốc gia"
                className="d-flex mb-3"
                name="quoc_gia_id"
                ref={register({ required: true })}

              />
              <div className = {style.addTheLoai}>
                <p className = {style.nameaaa}>id: Quốc gia</p>
                <p className = {style.nameaaa}>1: Việt Nam</p>
              </div>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}

            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-user"></i>Nhập tên diễn viên
              </label>
              <input
                placeholder="Nhập tên diễn viên"
                className="d-flex mb-3"
                name="dien_vien_id"
                ref={register({ required: true })}

              />
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-user"></i>Nhập thời lượng
              </label>
              <input
                placeholder="Nhập thời lượng phim"
                className="d-flex mb-3"
                name="thoi_luong"
                ref={register({ required: true })}

              />
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-link"></i>Nhập link phim
              </label>
              <input
                placeholder="Nhập link phim"
                className="d-flex mb-3"
                name="link_server"
                ref={register({ required: true })}

              />
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-link"></i>Nhập id film
              </label>
              <input
                placeholder="Nhập id film"
                className="d-flex mb-3"
                name="link_trailer"
                ref={register({ required: true })}

              />
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-link"></i>Nhập tiêu đề
              </label>
              <input
                placeholder="Nhập tiêu đề"
                className="d-flex mb-3"
                name="tieu_de"
                ref={register({ required: true })}

              />
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-calendar-week"></i>Nhập năm sản xuất
              </label>
              <input
                placeholder="Nhập năm sản xuất"
                className="d-flex mb-3"
                name="nam_san_xuat"
                ref={register({ required: true })}

              />
            </div>
          </div>

          <input
            className="btn btn-success"
            type="submit"
            value="Đăng phim"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>

    //-------------------------------------------------

  );
};

export default Add;
