import React, { useState, useEffect } from 'react';
import style from './style.module.css';


function CustomMain() {
    return (

        <div className={style.nav_right}>
            <div>
                <input placeholder="Find a film" type={'text'}></input>
            </div>
            <div className={style.header_right}>
                <p>All Film</p>
                <p>All Game</p>
                <p>All language</p>
                <p>All Countries</p>
                <p>All Rating</p>
                <p>Sort By</p>
            </div>
            <div className={style.content}>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(1).jpg"></img>
                        </div>

                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(2).jpg"></img>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(3).jpg"></img>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(4).jpg"></img>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(5).jpg"></img>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(1).jpg"></img>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(2).jpg"></img>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/dskm(3).jpg"></img>
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

