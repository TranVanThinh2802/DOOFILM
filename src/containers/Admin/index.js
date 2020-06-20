import React, {useEffect} from "react";
import CustomHeader from "../../Components/CustomHeader";
import style from "./style.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Routes from '../../Services/Router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddFilm from "../Add";
import RemoveFilm from "../Remove";
import FixFilm from "../Fix";
import ListFilm from '../ListFilm'
import {faHandPointLeft} from '@fortawesome/free-solid-svg-icons'







// const children = {
//   Add: {
//     path: "Add",
//     component: AddFilm,
//     name: "Thêm phim",
//   },
//   Remove: {
//     path: "Remove",
//     component: RemoveFilm,
//     name: "Xóa phim",
//   },
//   Fix: {
//     path: "Fix",
//     component: FixFilm,
//     name: "Sửa phim",
//   },
//   ListFilm: {
//     path: "ListFilm",
//     component: ListFilm,
//     name: "Danh Sách Phim"
//   }
// };



function Admin(props) {
  
  useEffect(()=>{
    console.log(props);
  },[])
  const { url, path } = useRouteMatch();

  const handleClick = (page) => {
    props.history.push('/Admin/Add');
  };
  // alert("xin chọn chức năng bên trái");
  return (
    
    <Router >
      <div className={style.left}>
        <h1 className = {style.admin}>Admin</h1>
        {/* <div className={style.listAdmin}>
          {Object.values(children).map((route, i) => (
            <Link className={style.text_link} to={`${url}/${route.path}`}>
              {route.name}
            </Link>
          ))}
        </div> */}
        <Link to = "/Admin/Add">Add</Link>
        <button onClick={()=>handleClick()}>click me</button>
        <switch>
        {
          
        }
        </switch>
        <div className = {style.right}>
            
            
        </div>
       
      </div>
      
    </Router>
    
  );
}

// function Topic({ routes }) {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();
//   let Demo = children[topicId].component;
//   return <Demo />;
// }

export default Admin;
