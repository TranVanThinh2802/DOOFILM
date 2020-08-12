import React, { Component, useState, useEffect } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import axios from "axios";
import ListFilm from "../ListFilm";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { loadAddFilmAction } from "../../Redux/Action/addfilmActions";

const Add = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  // const [pictures, setPictures] = useState([]);
  const [image, setImage] = useState({ file: "", raw: "" });
  const {
    alert: { code, message, type },
  } = useSelector((state) => state.generic);
  // const onDrop = (picture) => {
  //   console.log(picture);

  //   setPictures([...pictures, picture]);
  // };

  const onSubmit = (data) => {
    let bodyFormData = new FormData();
    Object.keys(data).forEach((key) => {
      bodyFormData.append(key, data[key]);
    });

    const formData = new FormData();
    formData.append("image", {
      uri: image.file,
      type: "image/jpg",
      name: "image.jpg",
    });

    dispatch(loadAddFilmAction(data));
  };

  const onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  const handleChange = (e) => {

    if (e.target.files.length) {
      setImage({
        file: URL.createObjectURL(e.target.files[0]),
      });
      
    }
  };

  const sweetalert = (data) => {
    swal({
      title: type,
      text: message,
      icon: "",
      buttons: true,
      dangerMode: true,
    });
  };

  useEffect(() => {
    if (code !== 0) {
      sweetalert();
      swal.close()
    } else {
     
    }
  }, [code]);

  return (
    <div className={style.right}>
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
                <i class="fas fa-images"></i>Chọn hình ảnh
                {/* {image.file ? (
                  <img src={image.file} alt="dummy" width="50" height="50" />
                ) : (
                  ""
                )} */}
              </label>
              <input
                className="d-flex mb-3"
                name="poster" 
                placeholder="chon hinh anh"
                // onChange={fileSelectedHandler}
                // onChange={handleChange}
                // type="file"
                // multiple="true"
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
                <i class="fas fa-link"></i>Nhập link trailer
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
