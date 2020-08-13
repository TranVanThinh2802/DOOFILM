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
  Button,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { getListFilmDeletedAction, loadListFilmAction } from "Redux/Action";
import { Pagination } from "@material-ui/lab";


const ListFilm = () => {
  const dispatch = useDispatch();
  const { listFilm } = useSelector(function (state) {
    return state.film;
  });
  useEffect(() => {
    dispatch(loadListFilmAction());
  }, []);

  const handleClick = (item) => {
    dispatch(getListFilmDeletedAction(item));
  };

  const {
    alert: { code, message, type },
  } = useSelector((state) => state.generic);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={style.right}>
      <Link to="/Admin/Add" className={style.btnFilm}>
        Thêm Phim
      </Link>

      {isLoading ? (
        <div className={style.listFilmAlert}>
          <i class="far fa-check-circle"></i>
          <Box className={style.titleListFilm}>Xóa phim thành công </Box>
          <Button
            style={{
              background: "none",
              color: "#00AA00",
              left: "44%",
              fontSize: "30px",
              outline: "none",
            }}
            className={style.closeListFilmAlert}
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
            {listFilm.data.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="Add">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.ten_phim}</TableCell>
                <TableCell align="right" style={{ position: "relative" }}>
                  {/* <img className={style.avatar} src={item.poster}></img> */}
                  <iframe
                    width="100%"
                    src={item.poster}
                    frameBorder="0"
                    scrolling="no"
                    seamless=""
                  ></iframe>
                  <div style={{ position: "absolute", opacity: "0", top: "0" }}>
                    &nbsp;
                  </div>
                </TableCell>
                {/* <TableCell align="right">{item.loai_phim_id}</TableCell> */}
                <TableCell align="right">{item.thoi_luong}</TableCell>
                {/* <TableCell align="right">{item.dien_vien}</TableCell> */}
                <TableCell align="right">{item.nam_san_xuat}</TableCell>
                <TableCell align="right" style={{ position: "relative" }}>
                  <iframe
                    src={item.link_server}
                    frameborder="0"
                    scrolling="no"
                    seamless=""
                  ></iframe>{" "}
                  {/* <video controls autoPlay="true">
                    <source src={item.link_server} type="video/mp4"></source>
                  </video> */}
                  <div style={{ position: "absolute", opacity: "0", top: "0" }}>
                    &nbsp;
                  </div>
                </TableCell>
                <TableCell className={style.trashListFilm} align="right">
                  <FontAwesomeIcon
                    style={{ marginRight: "5px" }}
                    icon={faPen}
                  ></FontAwesomeIcon>
                  <i
                    title="Xóa phim"
                    onClick={() => {
                      handleClick(item);
                      setIsLoading(true);
                    }}
                    class="fas fa-trash"
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

export default ListFilm;
