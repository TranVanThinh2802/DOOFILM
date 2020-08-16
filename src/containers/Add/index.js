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
  const [input, setInput] = useState(0)
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
  


  return (
    <div className={style.right}>
    {/* <p>{input}</p>
    <button onClick = {()=>setInput(input + 1)} >click me</button> */}
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
                {...input}
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
                name="kieu_phim_id"
                ref={register({ required: true })}
              ></input>
            </div>
            <div className={style.inputAdd}>
              <label>
                <i class="fas fa-pen"></i>Nhập loại phim
              </label>
              <input
                placeholder="Nhập loại phim"
                className="d-flex mb-3"
                name="loai_phim_id"
                ref={register({ required: true })}

              ></input>
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
                <i class="fas fa-link"></i>Nhập link dowload
              </label>
              <input
                placeholder="Nhập link trailer"
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
