import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { Route, Link } from "react-router-dom";
import {
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { loadDeleteFilmAction, loadListFilmAction } from "Redux/Action";
import { Pagination } from "@material-ui/lab";

const ListFilm = () => {
  const [Add, setAdd] = useState([]);
  const dispatch = useDispatch();
  const { listFilm } = useSelector(function (state) {
    return state.film;
  });
  useEffect(() => {
    dispatch(loadListFilmAction());
  }, []);

  const handleClick = (item) => {
    console.log("da xoa", item);
    dispatch(loadDeleteFilmAction({id: item.id}));
  };

  return (
    <div className={style.right}>
      <Link to="/Admin/Add" className={style.btnFilm}>
        {" "}
        Thêm Phim
      </Link>

      <TableContainer className={style.HTDS} component={Paper}>
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
                <TableCell align="right">
                  <img className={style.avatar} src = {item.poster}></img>
                </TableCell>
                <TableCell align="right">{item.quoc_gia_id}</TableCell>
                <TableCell align="right">{item.thoi_luong}</TableCell>
                <TableCell align="right">{item.dien_vien}</TableCell>
                <TableCell align="right">{item.nam_san_xuat}</TableCell>
                <TableCell align="right">
                  <video controls autoPlay="true">
                    <source src={item.link_server} type="video/mp4"></source>
                  </video>
                </TableCell>
                <TableCell align="right">
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    icon={faPen}
                  ></FontAwesomeIcon>
                  <button onClick={() => handleClick(item)}>
                  <i class="fas fa-trash"></i>
                  </button>
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
};

export default ListFilm;
