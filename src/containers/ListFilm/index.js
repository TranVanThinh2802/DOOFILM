import React, { Component , useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import style from './style.module.css'
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import {loadListFilmAction} from '../../Redux/Action/filmActions'
import { Pagination } from "@material-ui/lab";





const ListFilm = ()=> {
  const [Add, setAdd] = useState([]);
  const dispatch = useDispatch();
  const {listFilm} = useSelector(function(state){
    return state.film;
  })
  useEffect(() => {
    dispatch(loadListFilmAction())
  },[])

    return (
      
      <div className={style.right}>
      <Link to = "/Admin/Add" className = {style.btnFilm}> Thêm Phim</Link>

<TableContainer className = {style.HTDS} component={Paper}>
      <Table className={style.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="right">Tên phim</TableCell>
            <TableCell align="right">Hình ảnh</TableCell>
            <TableCell align="right">Thể loại</TableCell>
            <TableCell align="right">Thời lượng</TableCell>
            <TableCell align="right">Diễn viên</TableCell>
            <TableCell align="right">Năm sản xuất</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listFilm.data.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="Add">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.ten_phim}</TableCell>
              <TableCell align="right"><img className = {style.avatar}  src = {item.avatar}></img></TableCell>
              <TableCell align="right">{item.loai_phim_id}</TableCell>
              <TableCell align="right">{item.thoi_luong}</TableCell>
              <TableCell align="right">{item.dien_vien}</TableCell>
              <TableCell align="right">{item.nam_san_xuat}</TableCell>
              <TableCell align="right"><video controls autoPlay = "true" >
                    <source src = "https://drive.google.com/file/d/0B113z1JTweviRWd6M1lpdzVma3M/view" type = "video/mp4"></source>
                </video></TableCell>
              <TableCell align="right">
                <FontAwesomeIcon  style = {{marginRight:'5px'}} icon = {faPen}></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faTrash}></FontAwesomeIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className={style.pagination}>
          <Pagination count={10} color="secondary" />
        </div>
      </div>
    );
      }
    


export default ListFilm;
