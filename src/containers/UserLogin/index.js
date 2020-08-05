import React from 'react'
import FacebookLoginBtn from "react-facebook-login";
import style from './style.module.css'
function Admin(){

    const responseFacebook = (repsponse) => {
        console.log(repsponse);
      };

      let facebookData;

      const state = {
        auth: false,
        name: "",
        picture: "",
      };

      const componentClicked = () => {
        console.log("");
      };

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

    return(
        <div className = {style.userLogin}>
            <div className={style.filmUserLogin}>
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
        </div>
    )
}

export default Admin