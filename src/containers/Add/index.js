import React, { Component, useState } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import axios from "axios";
import ListFilm from "../ListFilm";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import {loadAddFilmAction} from '../../Redux/Action/addfilmActions'


const Add = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loadAddFilmAction(data));
  };

  const onSave = (e) => {
    e.preventDefault();
    // var {txtName, imge, txtCategory, txtLanguage} = this.state;
    // ListFilm('ListFilm', 'POST', {
    //   title: txtName,
    //   img: imge,
    //   theloai: txtCategory,
    //   ngonngu: txtLanguage
    // }).then(res =>{
    //   console.log(res);
    // });
    console.log(this.state);
  };
  const handleChange = (e) => {
    console.log(e);
  };

  const sweetalert = (data) => {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      buttons: true,
      dangerMode: true,
    });
    console.log(data);
  };

  return (
    <div className={style.right}>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form style = {{boxShadow:'0px 6px 14px 1px', padding:'25px'}}>
          <h2>Thêm Phim</h2>
          <div style= {{background:'white'}}>
            {/* <div className = {style.inputAdd}>
              <label><i class="fas fa-signature"></i>Nhập tên phim</label>
              <input
                placeholder="Nhập tên phim"
                className="d-flex mb-3"
                name="name_film"
                ref={register({ required: true })}
              ></input>
            </div> */}
            <div className = {style.inputAdd}>
              <label><i class="fas fa-images"></i>Chọn hình ảnh cho phim</label>
              <input
                className="d-flex mb-3"
                name="img"
                onChange={handleChange}
                type="file"
                ref={register({ required: true })}
              />
            </div>
            {/* <div className = {style.inputAdd}>
              <label><i class="fas fa-pen"></i>Nhập kiểu phim</label>
              <input
                placeholder="Nhập kiểu phim"
                className="d-flex mb-3"
                name="categrory"
                ref={register({ required: true })}
              ></input>
            </div> */}
            
            {/* <div className = {style.inputAdd}>
              <label><i class="fas fa-language"></i>Nhập ngôn ngữ cho phim</label>
              <input
              placeholder = "Nhập ngôn ngữ"
                className="d-flex mb-3"
                name="language"
                ref={register({ required: true })}
              />
            </div>
            {errors.exampleRequired && <span>This field is required</span>} */}

            {/* <div className = {style.inputAdd}>
              <label><i class="fas fa-user"></i>Nhập tên diễn viên</label>
              <input
              placeholder = "Nhập tên diễn viên"
                className="d-flex mb-3"
                name="nameUser"
                ref={register({ required: true })}
              />
            </div> */}
            {/* <div className = {style.inputAdd}>
              <label><i class="fas fa-link"></i>Nhập link phim</label>
              <input
              placeholder = "Nhập link phim"
                className="d-flex mb-3"
                name="link"
                ref={register({ required: true })}
              />
            </div> */}
            {/* <div className = {style.inputAdd}>
              <label><i class="fas fa-calendar-week"></i>Nhập năm sản xuất</label>
              <input
              placeholder = "Nhập năm sản xuất"
                className="d-flex mb-3"
                name="year"
                ref={register({ required: true })}
              />
            </div> */}
          </div>
         


          <input className="btn btn-success" type="submit" value="Đăng phim" onClick={(onSubmit)} />
        </form>
      </div>
    
    </div>

    //-------------------------------------------------

//     <div className={style.formAdd}>
//         <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h5 text-center mb-4">Write to us</p>
//         <div className="grey-text">
//           <MDBInput icon="user"  label="Your name"  group type="text" validate error="wrong"
//             success="right"/>
//           <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
//             success="right" />
//           <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
//           <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
//         </div>
//         <div className="text-center">
//           <MDBBtn outline color="secondary">
//             Send
//             <MDBIcon far icon="paper-plane" className="ml-1" />
//           </MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>

//     </div>
  );
};

export default Add;
