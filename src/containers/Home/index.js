import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//component
import CustomHeader from "../../Components/CustomHeader/index";
import CustomMain from "../../Components/CustomMain/index";
import Footer from "../../Components/CustomFooter/index";
import ReactList from "react-list";
import List from "../../Components/CustomList";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import FlatList from "flatlist-react";
import style from "./style.module.css";
import { Slide } from "react-slideshow-image";
import SlideShow from '../SlideShow/index'
import Loader from 'react-loader-spinner'



function Home(props) {
  const dispatch = useDispatch(); //khoi tao function thuc thi action
  // Loading const [isLoading, setIsLoading] = useState(true);
  const _renderVoucher = (item, index) => {
    return <div className={style.voucher}>{index + 1}</div>;
  };
  const _renderpromosion = (item, index) => {
    return (
      <div className={style.box}>
        <img src={item} alt=""></img>
      </div>
    );
  };
  //Loading 
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div
      className={style.overlay}
      style={{ padding: "50px", flexDirection: "row" }}
    >
      <div className={style.header}>
        <CustomHeader />
      </div>
      <div className={style.slideshow}>
      <div>
        <SlideShow />
      </div>
      </div>
      <div className={style.main}>
        <CustomMain />
      </div>
      <div className = {style.footer}>
        <Footer />
      </div>
      {/*Loading  <CircularProgress
        className={style.progress}
        variant={isLoading ? "indeterminate" : "determinate"}
        color={"secondary"}
      /> */}


      {/* Loading */}
      <Loader className = {style.progress}
         type="Hearts"
         color="pink"
         height={150}
         width={150}
         timeout={3000} //3 secs
 
      />
      
    </div>
  );
}

export default Home;
