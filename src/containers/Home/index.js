import React, { useState, useEffect, Fl } from 'react';

//component
import CustomHeader from '../../Components/CustomHeader/index'
import CustomMain from '../../Components/CustomMain/index'
import Footer from '../../Components/CustomFooter/index'
import ReactList from 'react-list';
import List from '../../Components/CustomList'



import FlatList from 'flatlist-react';
import style from './style.module.css'


function Home(props) {

  const _renderVoucher = (item, index) => {
    return (
        <div className= {style.voucher}>{index + 1}</div>
    )
    }
  const _renderpromosion = (item, index) => {
    return (

        <div className={style.box}>
          <img src={item} alt=""></img>
        </div>
    )
  }
  return (
    
    <div style = {{padding: '50px', flexDirection:"row"}}>
     
      <CustomHeader />
      <CustomMain />
       {/* <div className={style.list}>
        <h3>
          Danh Sách Khuyễn Mãi
        </h3>
      </div> */}
      {/* <div className={style.promosion}>
  
        <FlatList
        list={["imgs/dskm(1).jpg", "imgs/dskm(2).jpg", "imgs/dskm(3).jpg","imgs/dskm(4).jpg"]}
        renderItem={_renderpromosion}
      />
      </div> 

         <FlatList
          display = {{
            grid: true,
          }}
          list={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={_renderVoucher}
        /> 
         <div style={{overflow: 'auto', maxHeight: 400}}>
      <List
        list = {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem = {_renderVoucher}
        styleContain = {style.listVoucher}
       />
        </div> */}
      {/* <Footer />  */}
    </div>

  );
}

export default Home;