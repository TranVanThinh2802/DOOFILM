import React from 'react'
import CustomHeader from '../../Components/CustomHeader/index'
import CustomMain from '../../Components/CustomMain/index'
import CustomMyList from '../../Components/CustomMyList/index'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function MyList() {
    return (
        <div className={style.content} style={{ padding: '50px' }}>
            <div className={style.header}>
                <CustomHeader />
            </div>
            <div className={style.content_mylist}>
                <h1>Danh Sách Phim Của Tôi</h1>
                <CustomMyList />
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/acquy.jpg"></img>
                            <p className={style.infor_film}>Ác Quỷ Rừng Sâu kể về một cặp vợ chồng trẻ đang tìm kiếm bảo mẫu để chăm sóc đứa con gái mới chào đời.</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Ác Quỷ</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style = {{marginLeft:'70px'}}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/vungdat.jpg"></img>
                            <p className={style.infor_film}>Gia đình Abbot gồm người mẹ Evelyn cùng ba con chạy trốn đến một thành phố tưởng như an toàn. Tuy nhiên, cả gia đình không ngờ rằng ở thế giới bên ngoài cũng đã bị những sinh vật ngoài hành tinh thâu tóm.</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Vùng đất</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style={{ marginLeft: '78px' }}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/samacchet.jpg"></img>
                            <p className={style.infor_film}>Một tàu không gian gặp nạn, rơi xuống thị trấn hoang mạc yên bình. Vụ va chạm đã giải pháp một loại ký sinh trùng quỷ quái, tấn công mọi vật thể sống chúng tiếp xúc, khiến vật chủ mất ý thức.</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Sa mạc chết</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style={{ marginLeft: '48px' }}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/phivu.jpg"></img>
                            <p className={style.infor_film}>Dựa trên câu chuyện có thật về cuộc đào tẩu thần kì khỏi nhà tù an ninh Pretoria (Nam Phi) của hai nhà hoạt động chính trị Tim Jerkins (Daniel Radcliffe) và Stephen Lee (Daniel Webber).</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Phi vụ đào tẩu</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style={{ marginLeft: '20px' }}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/baylinhhon.png"></img>
                            <p className={style.infor_film}>Sau khi lấy trộm lá bùa bí ẩn từ người hàng xóm kỳ dị, cậu bé Josh thường xuyên gặp phải ác mộng. Trong mơ, người mẹ quá cố của Josh xuất hiện và thôi thúc cậu giết chết bà mẹ kế Gail. </p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Bẫy linh hồn</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style = {{marginLeft:'35px'}}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/kevohinh.jpg"></img>
                            <p className={style.infor_film}>Kẻ Vô Hình xoay quanh Cecilia Kass - cô gái bị mắc kẹt trong mối quan hệ đầy kiểm soát và bạo lực với khoa học gia tài năng và giàu có tên Adrian Griffin.</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Kẻ vô hình</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style={{ marginLeft: '64px' }}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/bangchung.jpg"></img>
                            <p className={style.infor_film}>Sau khi bị thương trong một tai nạn ô tô, Thu - một cô gái mù đã đến trình báo cảnh sát về vụ việc mà cô tin rằng đã trở thành án mạng. Tuy nhiên, cô gặp không ít khó khăn để thuyết phục cảnh sát tin mình vì là người khiếm thị.</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Bằng chứng vô hình</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style={{ marginLeft: '0px' }}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.box}>
                            <img src="imgs/antebellum.jpg"></img>
                            <p className={style.infor_film}>Successful author Veronica finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.</p>
                            <div className={style.infor}>
                                <div className={style.title}>
                                    <p>Antebellum</p>
                                    <p>Action</p>
                                </div>
                                <div className={style.start} style={{ marginLeft: '14px' }}>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}> </FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    )
}
export default MyList;