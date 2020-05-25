import React from 'react'
import style from './style.module.css'
import CustomHeader from '../../Components/CustomHeader'


function PlayMovie(){
    return(
        <div className = {style.main}>
            <div className = {style.left}>
                <CustomHeader />
            </div>
            <div className = {style.right}>
                <div className = {style.playfilm}>

                </div>
            </div>
        </div>
    )
}
export default PlayMovie;