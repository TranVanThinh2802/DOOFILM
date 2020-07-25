import React, { useEffect, useState } from "react";
import FacebookLoginBtn from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FormControl from "@material-ui/core/FormControl";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import {loadLoginAction} from '../../Redux/Action/loginAction'
import {useDispatch, useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";




const Login = (props) => {
  const {showAlert} = useSelector(state => state.login)
  const {alert: {
    code, message, type
  }} = useSelector(state => state.generic);
  const { register, handleSubmit, errors, watch } = useForm();


  const dispatch = useDispatch()

  
  console.log(props, "ddddd");
  // const { url, path } = useRouteMatch();

  const handleClick = () => {
    props.history.push("/Admin");
  };

  const onSubmit = (data) => {
    dispatch(loadLoginAction(data, handleClick ))
  };
  const handleChange = (e) => {
    
  };
  
  
  

  const state = {
    auth: false,
    name: "",
    picture: "",
  };

  const componentClicked = () => {
    console.log("");
  };
  const responseFacebook = (repsponse) => {
    console.log(repsponse);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  const sweetalert = (data) => {
    swal({
      title: type,
      text: message,
      icon: '',
      buttons: true,
      dangerMode: true,
    });
    
  };

 


  let facebookData;
  let googleData;
  state.auth
    ? (facebookData = <div>Hi!</div>)
    : (facebookData = (
        <FacebookLoginBtn
          appId="577232673228660"
          autoLoad={false}
          fields="name,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          cssClass="btnFacebook"
        />
      ));
  googleData = (
    <GoogleLogin
      clientId="301722701896-bmfipj3hhu3lvmcdu9horkcdviq4edo0.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      className={style.btnGoogle}
    />
  );
  
  useEffect(() => {
    if(code !== 0){
      sweetalert();

    }else{
    }
  }, [code]);


  return (
    <div className={style.loginBox}>
      <form>
        <div className={style.left}>
          <h1 className={style.singup}>Sign in</h1>
          <input
            className={style.txtEmail}
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, maxLength: 50 })}
          ></input>
          {errors.email?.type === "required" && "bạn chưa nhập email"}
          {errors.email?.type === "maxLength" && "email của bạn quá dài"}
          <input
            className={style.txtPassword}
            style={{ display: "flex" }}
            type="password"
            placeholder="Password"
            name="mat_khau"
            ref={register({ required: true, min: 5, maxLength: 80 })}
          ></input>
          {errors.password1?.type === "required" && "bạn chưa nhập email"}
          {errors.password1?.type === "maxLength" && "password của bạn quá dài"}
          {/* <input
            style={{ display: "flex" }}
            type="password"
            placeholder="Confirm password"
            name="password2"
            ref={register({
              validate: (value) => value === watch("password1"),
              required: true,
            })}
            placeholder="confim password"
          ></input> */}

          {errors.password2 && "password không đúng"}
          <button
            onClick={handleSubmit(onSubmit)}
            className={style.submit}
            type="submit"
            value=""
          >
            singn in
          </button>
          <Link className = {style.register} to = "/Register">Register</Link>
        </div>
        <div className={style.right}>
          <div className={style.loginwith}>
            Sign in with
            <br />
            social network
          </div>
          <button
            style={{ width: "100%", height: "40px" }}
            className={style.socialSignin}
          >
            {facebookData}
          </button>
          <button
            style={{ marginTop: "50px", width: "100%", background: "white" }}
            className={style.socialSsignin}
          >
            {googleData}
          </button>
        </div>
        <div className={style.or}>OR</div>
      </form>
    </div>
  );
};
export default Login;
