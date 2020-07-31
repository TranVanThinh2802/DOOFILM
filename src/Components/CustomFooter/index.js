import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function CustomFooter(){
    return(
        <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className = "ml-5" md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <img style = {{width:'158px' ,height:'95px'}} src= "imgs/logo1.png" />
            </h5>
            <p>
              WELCOME DOOFLIM
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              DooFilm
            </h5>
            <ul className=" a list-unstyled">
              <li>
                <a className = {style.footerA} href="#!">Phim lẻ mới</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim bộ mới</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim sắp chiếu</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim kinh điển</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Phim Lẻ
            </h5>
            <ul className="list-unstyled">
              <li>
                <a className = {style.footerA} href="#!">Phim hành động</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim kiếm hiệp</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim kinh dị</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim viễn tưởng</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Phim Bộ
            </h5>
            <ul className="list-unstyled">
              <li>
                <a className = {style.footerA} href="#!">Phim bộ Việt Nam</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim bộ Trung Quốc</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim bộ Hàn Quốc</a>
              </li>
              <li>
                <a className = {style.footerA} href="#!">Phim bộ Hồng Kông</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr style={{color:'lightpink'}} />
      {/* <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div> 
      <hr />*/}
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
            <i style ={{color:'blue',fontSize:'30px'}} class="fab fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i style ={{color:'#55ACEE',fontSize:'30px'}} className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i style ={{color:'#DD4B39',fontSize:'30px'}} className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i style ={{color:'#0082CA',fontSize:'30px'}} className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i style ={{color:'#EC4A89',fontSize:'30px'}} className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div> */}
    </MDBFooter>
  );
    
}
export default CustomFooter;