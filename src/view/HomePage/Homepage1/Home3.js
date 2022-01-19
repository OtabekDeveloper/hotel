import 'bootstrap/dist/css/bootstrap.min.css'
import { MdWaves } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import {BsCalendarWeek} from 'react-icons/bs';
import {BiComment} from 'react-icons/bi';
import './Home3.css'

function Home3(){
    return(
        <>
            <section className="blog">
                <div className="container">
                    <div className="main_title mt_wave a_center">
                        <h2>LATEST NEWS & EVENTS</h2>
                        <MdWaves className="iconHome" />
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
                        <div className="col-md-6 col-sm-6">
                            <article className="blog_item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <figure>
                                            <a href="" className="hover_effect h_blue h_link">
                                                <img src="./assets/HomeIMG/latest_news1.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="main">
                                            <h3>
                                                <a href="" >Live your myth in Greece</a>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, 
                                                cons ectetuer adipiscing elit, 
                                                sed diam nonummy nibh euismod 
                                                tincidunt ut laoreet dolore...
                                            </p>
                                            <div className="info">
                                                <AiOutlineUser />
                                                <a href="">JOHN DOE</a>
                                                <BsCalendarWeek />
                                                <a href="">AUGUST 13, 2015</a>
                                                <BiComment />
                                                <a href="">4 COMMENTS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <article className="blog_item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <figure>
                                            <a href="" className="hover_effect h_blue h_link">
                                                <img src="./assets/HomeIMG/latest_news2.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="main">
                                            <h3>
                                                <a href="" >Live your myth in Greece</a>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, 
                                                cons ectetuer adipiscing elit, 
                                                sed diam nonummy nibh euismod 
                                                tincidunt ut laoreet dolore...
                                            </p>
                                            <div className="info">
                                                <AiOutlineUser />
                                                <a href="">JOHN DOE</a>
                                                <BsCalendarWeek />
                                                <a href="">AUGUST 13, 2015</a>
                                                <BiComment />
                                                <a href="">4 COMMENTS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <article className="blog_item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <figure>
                                            <a href="" className="hover_effect h_blue h_link">
                                                <img src="./assets/HomeIMG/latest_news3.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="main">
                                            <h3>
                                                <a href="" >Live your myth in Greece</a>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, 
                                                cons ectetuer adipiscing elit, 
                                                sed diam nonummy nibh euismod 
                                                tincidunt ut laoreet dolore...
                                            </p>
                                            <div className="info">
                                                <AiOutlineUser />
                                                <a href="">JOHN DOE</a>
                                                <BsCalendarWeek />
                                                <a href="">AUGUST 13, 2015</a>
                                                <BiComment />
                                                <a href="">4 COMMENTS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <article className="blog_item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <figure>
                                            <a href="" className="hover_effect h_blue h_link">
                                                <img src="./assets/HomeIMG/latest_news4.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="main">
                                            <h3>
                                                <a href="" >Live your myth in Greece</a>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, 
                                                cons ectetuer adipiscing elit, 
                                                sed diam nonummy nibh euismod 
                                                tincidunt ut laoreet dolore...
                                            </p>
                                            <div className="info">
                                                <AiOutlineUser />
                                                <a href="">JOHN DOE</a>
                                                <BsCalendarWeek />
                                                <a href="">AUGUST 13, 2015</a>
                                                <BiComment />
                                                <a href="">4 COMMENTS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home3