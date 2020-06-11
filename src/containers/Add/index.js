import React, { Component } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Add: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://5ee0c4b130deff0016c3f5df.mockapi.io/DooFilm",
      data: null,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          Add: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={style.right}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">
                Thêm Film
              </button>
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
                        <th>Trang Thai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Add.map(function (items, index) {
                        return (
                          <tr>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.img}</td>
                            <td>{items.theloai}</td>
                            <td>{items.ngonngu}</td>
                            <td className="mr-1">
                              <button
                                type="button"
                                className="btn btn-primary mr"
                              >
                                Sua
                              </button>
                              <button type="button" className="btn btn-danger">
                                Xoa
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
        </div>
      </div>
    );
  }
}


export default Add;
