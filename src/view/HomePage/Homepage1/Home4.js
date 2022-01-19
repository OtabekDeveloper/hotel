import { MdWaves } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import './Home4.css'

function Home4() {
    return (
        <>
            <section className="lightgrey_bg">
                <div className="container">
                    <div className="main_title mt_wave a_center">
                        <h2>OUR HAPPY CLIENTS</h2>
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

                    <section className="section2">
                        <div className="containerHome">
                            <div className="cardhome">
                                <div className="fronts">
                                    <div className="content">
                                        <FaRegUser className="IMGicon"/>
                                        <h3>Ina Aldrich, Greece</h3>
                                    </div>
                                </div>
                                <div className="backHome">
                                    <div className="content">
                                        <p>
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <br />
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Asperiores praesentium consectetur
                                            repudiandae
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="containerHome">
                            <div className="cardhome">
                                <div className="fronts">
                                    <div className="content">
                                        <FaRegUser className="IMGicon"/>
                                        <h3>William Whiten, Greece</h3>
                                    </div>
                                </div>
                                <div className="backHome">
                                    <div className="content">
                                        <p>
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <br />
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Asperiores praesentium consectetur
                                            repudiandae
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="containerHome">
                            <div className="cardhome">
                                <div className="fronts">
                                    <div className="content">
                                        <FaRegUser className="IMGicon"/>
                                        <h3>John Doe, Greece</h3>
                                    </div>
                                </div>
                                <div className="backHome">
                                    <div className="content">
                                        <p>
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <br />
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Asperiores praesentium consectetur
                                            repudiandae
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </section>






                </div>
            </section>
        </>
    )
}

export default Home4