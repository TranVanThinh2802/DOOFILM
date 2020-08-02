import React from "react";
import style from "./style.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AddFilm from "../Add";
import RemoveFilm from "../Remove";
import FixFilm from "../Fix";
import ListFilm from "../ListFilm";
import User from "../User";
import Chart from "../Chart";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const children = {
  Add: {
    path: "Add",
    component: AddFilm,
    name1: "Thêm phim",
  },
  Remove: {
    path: "Remove",
    component: RemoveFilm,
    name2: "Phim đã xóa",
  },
  Fix: {
    path: "Fix",
    component: FixFilm,
    name3: "Sửa phim",
  },
  ListFilm: {
    path: "ListFilm",
    component: ListFilm,
    name4: "Danh sách phim",
  },
  User: {
    path: "User",
    component: User,
    name5: "Người dùng",
  },
  Chart: {
    path: "Chart",
    component: Chart,
    name6: "Biểu đồ",
  },
};

function Admin(props) {
  const { url, path } = useRouteMatch();

  const handleClick = (props) => {
    props.history.push("/Home");
  };

  return (
    // <Router>
    //   <div className={style.left}>
    //     <h1 className = {style.admin}>Admin</h1>
    //     <div className={style.listAdmin}>
    //       {Object.values(children).map((route, i) => (
    //         <Link className={style.text_link} to={`${url}/${route.path}`}>
    //           {route.name}
    //         </Link>
    //       ))}
    //     </div>
    //     <Switch>
    //       <Route exact path={path}></Route>
    //       <Route path={`${path}/:topicId`}>
    //         <Topic routes={props.routes} />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    // -----------------------------------------------------
    <Router>
      <input className={style.check} type="checkbox" id="check"></input>
      <label for="check" style={{ position: "absolute" }}>
        <i
          style={{
            position: "absolute",
            zIndex: "10",
            cursor: "pointer",
            background: "#042331",
            borderRadius: "3px",
            left: "0px",
            top: "25px",
            fontSize: "35px",
            color: "white",
            padding: "6px 12px",
            transition: "all .5s",
          }}
          className="fas fa-bars"
          id="btn"
        ></i>
        <i
          style={{
            position: "absolute",
            cursor: "pointer",
            background: "#042331",
            borderRadius: "3px",
            zIndex: "11",
            left: "-195px",
            top: "17px",
            fontSize: "30px",
            color: "#0a5275",
            padding: "4px 9px",
            transition: "all .5s ease",
          }}
          className="fas fa-times"
          id="cancel"
        ></i>
      </label>
      <div className={style.adminSidebar}>
        <header className={style.adminHeader}>Admin</header>
        <ul>
          <li>
            <a className={style.adminFunction}>
              <i
                style={{ marginRight: "16px" }}
                className="fas fa-user-plus"
              ></i>
              {Object.values(children).map((route, i) => (
                <Link className={style.text_link} to={`${url}/${route.path}`}>
                  {route.name1}
                </Link>
              ))}
            </a>
          </li>
          <li>
            <a className={style.adminFunction}>
              <i style={{ marginRight: "16px" }} className="fas fa-trash"></i>
              {Object.values(children).map((route, i) => (
                <Link className={style.text_link} to={`${url}/${route.path}`}>
                  {route.name2}
                </Link>
              ))}
            </a>
          </li>
          <li>
            <a className={style.adminFunction}>
              <i style={{ marginRight: "16px" }} className="fas fa-tools"></i>
              {Object.values(children).map((route, i) => (
                <Link className={style.text_link} to={`${url}/${route.path}`}>
                  {route.name3}
                </Link>
              ))}
            </a>
          </li>
          <li>
            <a className={style.adminFunction}>
              <i style={{ marginRight: "16px" }} className="fas fa-list"></i>
              {Object.values(children).map((route, i) => (
                <Link className={style.text_link} to={`${url}/${route.path}`}>
                  {route.name4}
                </Link>
              ))}
            </a>
          </li>
          <li>
            <a className={style.adminFunction}>
              <i style={{ marginRight: "16px" }} className="fas fa-users"></i>
              {Object.values(children).map((route, i) => (
                <Link className={style.text_link} to={`${url}/${route.path}`}>
                  {route.name5}
                </Link>
              ))}
            </a>
          </li>
          <li>
            <a className={style.adminFunction}>
              <i
                style={{ marginRight: "16px" }}
                className="fas fa-chart-bar"
              ></i>
              {Object.values(children).map((route, i) => (
                <Link className={style.text_link} to={`${url}/${route.path}`}>
                  {route.name6}
                </Link>
              ))}
            </a>
          </li>
        </ul>
        <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:topicId`}>
            <Topic routes={props.routes} />
          </Route>
        </Switch>
        <section></section>
      </div>
      <section></section>
    </Router>
  );
}

function Topic({ routes }) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  let Demo = children[topicId].component;
  return <Demo />;
}

export default Admin;
