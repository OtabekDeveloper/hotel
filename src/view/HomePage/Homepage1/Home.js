import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdWaves } from 'react-icons/md';

function Home(){
    return(
        <>
            <div className="homePage">
                <div className="container">
                    <div className="main_title mt_wave a_center">
                        <h2>OUR FAVORITE ROOMS</h2>
                        <MdWaves className="iconHome"/>
                    </div>
                    <p className="main_description a_center">
                        Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing elit, sed diam nonummy nibh 
                        euismod tincidunt ut laoreet dolore magna 
                        aliquam erat volutpat. Ut wisi enim ad 
                        minim veniam, quis nostrud exerci tation 
                        ullamcorper suscipit.
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <article className="room">
                                <figure>
                                    <div className="price">
                                        €89
                                        <span>/ night</span> 
                                    </div>
                                    <a href="" className="hover_effect h_blue h_link">
                                        <img className="img-responsive" src="./assets/HomeIMG/single-room.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <h4>
                                            <a href="" >Single Room</a>
                                        </h4>
                                        <span className="f_right">
                                            <a href="" className="button btn_sm btn_blue">VIEW DETAILS</a>
                                        </span>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <article className="room">
                                <figure>
                                    <div className="price">
                                        €89
                                        <span>/ night</span> 
                                    </div>
                                    <a href="" className="hover_effect h_blue h_link">
                                        <img className="img-responsive" src="./assets/HomeIMG/double-room.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <h4>
                                            <a href="" >Single Room</a>
                                        </h4>
                                        <span className="f_right">
                                            <a href="" className="button btn_sm btn_blue">VIEW DETAILS</a>
                                        </span>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <article className="room">
                                <figure>
                                    <div className="price">
                                        €89
                                        <span>/ night</span> 
                                    </div>
                                    <a href="" className="hover_effect h_blue h_link">
                                        <img className="img-responsive" src="./assets/HomeIMG/deluxe-room.jpg" alt="" />
                                    </a>
                                    <figcaption>
                                        <h4>
                                            <a href="" >Single Room</a>
                                        </h4>
                                        <span className="f_right">
                                            <a href="" className="button btn_sm btn_blue">VIEW DETAILS</a>
                                        </span>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="mt40 a_center">
                        <a href="" className="button btn_sm btn_yellow">
                            VIEW ROOMS LIST
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home