import React from 'react'
import style from './style.module.css'
import CustomHeader from '../../Components/CustomHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp  } from '@fortawesome/free-solid-svg-icons'



function PlayMovie(){
    return(
        <div className = {style.main}>
            <div className = {style.left}>
                <CustomHeader />
            </div>
            <div className = {style.right}>
                <div className = "row">
                    <div className = "col-sm-4">
                        <div className = "card" style = {{width: "21rem"}}>
                        <img src= "imgs/3in1.jpg" style = {{height:"450px"}}  className = "card-img-top"></img>
                            <div className = "card-body d-flex">
                            <a className = "btn btn-success" style = {{marginRight: "10px"}}>Dowload Film</a>
                            <a className ="btn btn-danger" style = {{marginRight: "10px"}}>Xem trailer</a>
                                <a className = "btn btn-info">Xem Phim</a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-4">
                        <div className = "card" style = {{width: "21rem"}}>
                            <div className = "card-body">
                                <h3>3 Trong 1</h3>
                                <p>Trạng thái: Vietsub 720p</p>
                                <p>Sắp chiếu: Vietsub 1080p</p>
                                <p>Đạo diễn:Updating....</p>
                                <p>Diễn viên:Updating...</p>
                                <p>Thể loại: hài hước</p>
                                <div className = "d-flex like">
                                    <a className = "btn btn-primary" style = {{marginRight: '10px'}}><FontAwesomeIcon style = {{marginRight: '5px'}} icon={faThumbsUp}></FontAwesomeIcon>Thích</a>
                                    <a className = "btn btn-primary">Chia sẻ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlayMovie;