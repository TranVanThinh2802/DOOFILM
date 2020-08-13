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
  Box,
} from "@material-ui/core";
import { loadListFilmDeleteAction, loadRestoreFilmAction, updateRestoreFilmAction } from "Redux/Action";
import { Pagination } from "@material-ui/lab";
import swal from "sweetalert";
import { Button } from "rsuite";

const Remove = () => {
  const [Add, setAdd] = useState([]);
  const dispatch = useDispatch();
  const { listFilm } = useSelector(function (state) {
    return state.listDeleteFilm;
  });
  useEffect(() => {
    dispatch(loadListFilmDeleteAction());
  }, []);

  const handleClick = (item) => {
    console.log("da xoa", item);
    dispatch(loadRestoreFilmAction(item));
    
  };



  const {
    alert: { code, message, type },
  } = useSelector((state) => state.generic);

  

  // const sweetalert = (data) => {
  //   swal({
  //     title: type,
  //     text:'Khôi phục phim thành công',
  //     icon: "",
  //     buttons: true,
  //     dangerMode: true,
  //   });
  // };

  // useEffect(() => {
  //   if (code !== 0) {
  //     sweetalert();
  //   } else {

  //   }
  // }, [code]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={style.right}>
      {isLoading ? (
        <div className={style.RemoveAlert}>
          <i class="far fa-check-circle"></i>
          <Box className={style.titleRemove}>Khôi phục phim thành công </Box>
          <Button
            style={{
              background: "none",
              color: "#00AA00",
              border: "solid 1px #00AA00",
            }}
            className={style.closeRemoveAlert}
            onClick={() => {
              setIsLoading(false);
            }}
          >
            Ok
          </Button>
        </div>
      ) : (
        ""
      )}
      <TableContainer className={style.HTDS} component={Paper}>
        <Table className={style.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell align="right">Tên phim</TableCell>
              <TableCell align="right">Hình ảnh</TableCell>
              {/* <TableCell align="right">Thể loại</TableCell> */}
              <TableCell align="right">Thời lượng</TableCell>
              {/* <TableCell align="right">Diễn viên</TableCell> */}
              <TableCell align="right">Năm sản xuất</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listFilm.map((item) => (
              <TableRow key={item.ten_phim}>
                <TableCell component="th" scope="Add">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.ten_phim}</TableCell>
                <TableCell align="right" style={{ position: "relative" }}>
                  {/* <img className={style.avatar} src={item.poster}></img> */}
                  <iframe
                    width="100%"
                    src={item.poster}
                    frameborder="0"
                    scrolling="no"
                    seamless=""
                  ></iframe>
                  <div style={{ position: "absolute", opacity: "0", top: "0" }}>
                    &nbsp;
                  </div>
                </TableCell>
                {/* <TableCell align="right">{item.quoc_gia_id}</TableCell> */}
                <TableCell align="right">{item.thoi_luong}</TableCell>
                {/* <TableCell align="right">{item.dien_vien}</TableCell> */}
                <TableCell align="right">{item.nam_san_xuat}</TableCell>
                <TableCell align="right" style={{ position: "relative" }}>
                  {/* <video controls autoPlay="true">
                    <source src={item.link_server} type="video/mp4"></source>
                  </video> */}
                  <iframe
                    width="100%"
                    src={item.link_server}
                    frameborder="0"
                    scrolling="no"
                    seamless=""
                  ></iframe>
                  <div style={{ position: "absolute", opacity: "0", top: "0" }}>
                    &nbsp;
                  </div>
                </TableCell>
                <TableCell className={style.trashRestoreRemove} align="right">
                  <i
                    title="Khôi phục phim"
                    onClick={() => {
                      handleClick(item);
                      setIsLoading(true);
                    }}
                    class="fas fa-trash-restore"
                  ></i>
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

export default Remove;
