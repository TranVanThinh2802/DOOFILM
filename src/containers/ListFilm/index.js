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
            <TableCell align="right">Tên Phim</TableCell>
            <TableCell align="right">Hình ảnh</TableCell>
            <TableCell align="right">Thể loại</TableCell>
            <TableCell align="right">Ngôn ngữ phim</TableCell>
            <TableCell align="right">Nội Dung</TableCell>
            <TableCell align="right">Đánh giá</TableCell>
            <TableCell align="right">Quốc gia</TableCell>
            <TableCell align="right">Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listFilm.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="Add">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.ten_phim}</TableCell>
              <TableCell align="right"><img className = {style.avatar}  src = {item.avatar}></img></TableCell>
              <TableCell align="right">{item.loai_phim}</TableCell>
              <TableCell align="right">{item.ngon_ngu}</TableCell>
              <TableCell align="right">{item.noi_dung}</TableCell>
              <TableCell align="right">{item.danh_gia}</TableCell>
              <TableCell align="right">{item.quoc_gia}</TableCell>
              <TableCell align="right">
                <FontAwesomeIcon  style = {{marginRight:'5px'}} icon = {faPen}></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faTrash}></FontAwesomeIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
        {/* <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to = "/Admin/Add" className="btn btn-info mb-10">
                Thêm Film
              </Link>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Danh Sach Phim</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Ten Flim</th>
                        <th>Hinh anh</th>
                        <th>The loai</th>
                        <th>Ngon ngu phim</th>
                        <th>noi dung </th>
                        <th>danh gia</th>
                        <th>quoc gia</th>
                        <th>Trang Thai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Add.map(function (items, index) {
                        return (
                          <tr>
                            <td>{items.id}</td>
                            <td>{items.ten_phim}</td>
                            <td><img src = {items.avatar}></img></td>
                            <td>{items.loai_phim}</td>
                            <td>{items.ngon_ngu}</td>
                            <td>{items.noi_dung}</td>
                            <td>{items.danh_gia}</td>
                            <td>{items.quoc_gia}</td>
                            <td className="mr-1">
                              <button
                                type="button"
                                className="btn btn-primary mr"
                              >
                                Sửa
                              </button>
                              <button className="btn btn-danger">
                                 Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
      }
    


export default ListFilm;
