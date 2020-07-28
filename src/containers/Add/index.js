import React, { Component, useState } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import axios from "axios";
import ListFilm from "../ListFilm";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



const Add = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Thêm Phim</h2>
          
          <label>Nhập tên phim</label>
          <input
            placeholder="Nhập tên phim"
            className="d-flex mb-3"
            name="name_film"
            ref={register({ required: true })}
          ></input>
          <label>Chọn hình ảnh cho phim</label>
          <input
            className="d-flex mb-3"
            name="img"
            onChange={handleChange}
            type="file"
            ref={register({ required: true })}
          />
          <label>Nhập thể loại phim</label>
          <input
            placeholder="Nhập thể loại"
            className="d-flex mb-3"
            name="categrory"
            ref={register({ required: true })}
          ></input>
          
          <label>Nhập ngôn ngữ cho phim</label>
          <input
            className="d-flex mb-3"
            name="language"
            ref={register({ required: true })}
          />
          
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn btn-success" type="submit" value="Đăng phim" onClick={handleSubmit(sweetalert)} />
        </form>
      </div>
    </div>


    //-------------------------------------------------

//     <div className = {style.formAdd}>
//       <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h5 text-center mb-4">Sign up</p>
//         <div className="grey-text">
//           <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
//             success="right" />
//           <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
//             success="right" />
//           <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
//             error="wrong" success="right" />
//             <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
//             error="wrong" success="right" />
//           <MDBInput label="Your password" icon="lock" group type="password" validate />
//         </div>
//         <div className="text-center">
//           <MDBBtn color="primary">Register</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>  
//     </div>
  );
};

export default Add;
