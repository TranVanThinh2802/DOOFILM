import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import CustomHeader from "../../Components/CustomHeader";
import { Box } from "@material-ui/core";
function ActionFilm() {
  return (
    <div>
      <div>
        <CustomHeader />
      </div>
      <Box className={style.ActionFilmTitle} m={5} bgcolor="">
        DooFilm chúc bạn xem phim vui vẻ
      </Box>
      <div className={style.action}>

        <iframe
          src="https://drive.google.com/file/d/1REj6YiEEt4IrUCbSC-30O4zK_2THrmI7/preview"
          width="640"
          height="480"
        ></iframe>
      </div>
      <div>
      {/* <FacebookProvider appId="577232673228660">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider> */}
      </div>
    </div>
  );
}

export default ActionFilm;
