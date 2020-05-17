import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch} from '@fortawesome/free-solid-svg-icons'


function CustomMain() {
    return (

        <div className={style.nav_right}>
            <div className = {style.search}>
                <FontAwesomeIcon className = {style.icon_search} icon = {faSearch}></FontAwesomeIcon> <input placeholder="Find a film" type={'text'}></input>
            </div>
            <div className={style.header_right}>
                <p>Tất cả phim</p>
                <p>Phim trò chơi</p>
                <p>Tất cả ngôn ngư</p>
                <p>Tất cả quốc gia</p>
                <p>Tất cả đánh giá</p>
                <p>Sắp xếp</p>
            </div>
            <div className={style.content}>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(1).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(2).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(3).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(4).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(5).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(1).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(2).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(3).jpg"></img>
                            <p className = {style.infor_film}>đây là thịnh</p>
                            <div className = {style.infor}>
                                <div className = {style.title}>
                                    <p>Ác Mộng Bên Hồ</p>
                                    <p>Action</p>
                                </div>
                                <div className = {style.start}>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                <FontAwesomeIcon icon = {faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
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

