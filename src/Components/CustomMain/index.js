import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import ItemFilm from "../../Components/ItemFilm";
import { GridList, GridListTile } from "@material-ui/core";
import DataFilm from "./data";
import { Pagination, Autocomplete } from "@material-ui/lab";
import TextField from '@material-ui/core/TextField';
import Datacombobox from './datacombobox';
import Combobox from '../../Components/ComboBox'


function CustomMain() {
  return (
    <div className={style.nav_right}>
      <div className={style.search}>
        <FontAwesomeIcon
          className={style.icon_search}
          icon={faSearch}
        ></FontAwesomeIcon>{" "}
        <input placeholder="Find a film" type={"text"}></input>
      </div>
      <div className={style.header_right}>
        <p>Tất cả phim</p>
        <p>Phim trò chơi</p>
        <p>Tất cả ngôn ngư</p>
        <p>Tất cả quốc gia</p>
        <p>Tất cả đánh giá</p>
        <p>Sắp xếp</p>
        
        
          {/* <Autocomplete
            id="combo-box-demo"
            options={Datacombobox}
            getOptionLabel={(option) => option.title}
            style={{ width: 120}}
            renderInput={(params) => (
              <TextField {...params} label="" variant="outlined" />
            )}
          /> */}

 
      </div>



      {/* <ItemFilm /> */}
      <GridList className={style.list_film} cellHeight={"auto"} cols={4}>
        {DataFilm.map((item, k) => (
          <GridListTile>
            <ItemFilm
              nameFilm={item.nameFilm}
              image={item.image}
              content={item.content}
              Category={item.Category}
              key={k}
            ></ItemFilm>
          </GridListTile>
        ))}
      </GridList>
      <div className={style.pagination}>
        <Pagination count={10} color="secondary" />
      </div>
    </div>
  );
}
export default CustomMain;






















// function CustomMain() {
//     const array = ["imgs/venom.jpeg", "imgs/slideshow(5).jpg", "imgs/slideshow(6).jpg"];
//     const [imgShow, setImageShow] = useState({ value: 0 });
//     useEffect(() => {
//         setInterval(function () {

//             if (imgShow.value < 2) {

//                 imgShow.value += 1;
//                 setImageShow({ ...imgShow });
//             } else {
//                 imgShow.value = 0;
//                 setImageShow({ ...imgShow });
//             }
//         }, 3000)
//     }, [])
//     return (

//         <div className="slider">
//             <div className="slideshow">
//                 <img className="hinh1" src={array[imgShow.value]} alt="" />
//             </div>

//             <div className="buy-ticked">
//                 <div className="tab-header">
//                     <h5>Theo rạp</h5>
//                     <h5>Theo phim</h5>
//                 </div>
//                 <div className="tab-content">
//                     <div>
//                         <form id="frm-cinema">
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn rạp</option>
//                                 <option value="">Quận 10, TP. HCM</option>
//                                 <option value="">Quận Bình Thạnh, TP. HCM</option>
//                                 <option value="">Quận 2, TP. HCM</option>
//                                 <option value="">Quận 1, TP. HCM</option>
//                             </select>
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn ngày</option>
//                             </select>
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn suất</option>
//                             </select>
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn phim</option>
//                             </select>
//                             <button type="submit" className="buy-cinema">$Mua vé</button>
//                         </form>
//                     </div>
//                     <div>
//                         <form id="frm-cinema">
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn phim</option>
//                                 <option value="">Quận 10, TP. HCM</option>
//                                 <option value="">Quận Bình Thạnh, TP. HCM</option>
//                                 <option value="">Quận 2, TP. HCM</option>
//                                 <option value="">Quận 1, TP. HCM</option>
//                             </select>
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn rạp</option>
//                             </select>
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn ngày</option>
//                             </select>
//                             <select name="" id="select-cinema">
//                                 <option value="">Chọn xuất</option>
//                             </select>
//                             <button type="submit" className="buy-cinema">$Mua vé</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
