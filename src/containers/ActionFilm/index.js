import React from 'react'
import style from './style.module.css'
import CustomHeader from '../../Components/CustomHeader'
import { Player } from 'video-react';
import ReactPlayer from 'react-player/lazy'

function ActionFilm(){
    return(
    <div>
            <div>
                <CustomHeader/>
            </div>
            <div className = {style.action}>
            {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=y_6aSG2yfe8' /> */}

                {/* <video>
    <source src="https://drive.google.com/uc?export=download&id=1REj6YiEEt4IrUCbSC-30O4zK_2THrmI7" type='video/mp4'/>
</video> */}
            </div>
            <div className = {style.comment}>
                <p>Comment o day</p>
            </div>
            
            <iframe width = "100%" height = "100%" src = "https://drive.google.com/file/d/1REj6YiEEt4IrUCbSC-30O4zK_2THrmI7/view?usp=sharing"></iframe>
    </div>
      )
}

export default ActionFilm;