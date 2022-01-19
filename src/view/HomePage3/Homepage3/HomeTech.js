import { MdWaves } from 'react-icons/md';
import "./HomeTech.css"

function HomeTech() {
    return (
        <>
            <div className="Home2version">
                <form className="formHome">
                    <div className="itemHome">
                        <input type="email" className="inputHome"
                            placeholder="Your Email Address"
                            aria-label="Your Email Address"
                        />
                    </div>
                    <div className="itemHome">
                        <input type="text" className="inputHome"
                            placeholder="First name"
                            aria-label="First name"
                        />
                    </div>
                    <div className="itemHome">
                        <input type="number"
                            className="inputHome input-text qty text"
                            placeholder="Enter your number"
                            aria-label="Enter your number"
                        />
                    </div>

                    <button className="buttonHome" type="submit">
                        BOOK A ROOM
                    </button>
                </form>
            </div>
            <section id="about_rooms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div id="about">
                                <div className="main_title mt_wave a_left">
                                    <h2>ABOUT ZANTE HOTEL</h2>
                                    <MdWaves className="wHome"/>
                                </div>
                                <p className="main_description a_left">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper
                                    suscipit. Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div id="rooms">
                                <div className="main_title mt_wave a_left">
                                    <h2>OUR FAVORITE ROOMS</h2>
                                    <MdWaves className="qHome"/>
                                </div>
                                <p className="main_description">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation
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
                                                <a href="#" className="hover_effect h_blue h_link">
                                                    <img src="./assets/HomeIMG/single-room.jpg" className="img-responsive" alt="" />
                                                </a>
                                                <figcaption>
                                                    <h5>
                                                        <a href="#">Single Room</a>
                                                    </h5>
                                                    <span className='f-right'>
                                                        <a href="#" className="button btn_xs btn_blue">VIEW DETAILS</a>
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
                                                <a href="#" className="hover_effect h_blue h_link">
                                                    <img src="./assets/HomeIMG/double-room.jpg" className="img-responsive" alt="" />
                                                </a>
                                                <figcaption>
                                                    <h5>
                                                        <a href="#">Single Room</a>
                                                    </h5>
                                                    <span className='f-right'>
                                                        <a href="#" className="button btn_xs btn_blue">VIEW DETAILS</a>
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
                                                <a href="#" className="hover_effect h_blue h_link">
                                                    <img src="./assets/HomeIMG/deluxe-room.jpg" className="img-responsive" alt="" />
                                                </a>
                                                <figcaption>
                                                    <h5>
                                                        <a href="#">Single Room</a>
                                                    </h5>
                                                    <span className='f-right'>
                                                        <a href="#" className="button btn_xs btn_blue">VIEW DETAILS</a>
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTech