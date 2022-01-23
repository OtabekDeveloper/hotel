import { MdWaves } from "react-icons/md"
import './Home5.css'

function Home5(){
    return(
        <>
            <section className="homePage">
                <div className="container">
                    <div className="main_title mt_wave a_center">
                        <h2>DISCOVER GREECE</h2>
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
                        <div className="col-md-3 col-sm-3">
                            <div className="places_item">
                                <a href="#">
                                    <img src="./assets/HomeIMG/place1.jpg" alt="" />
                                </a>
                                <div className="place_name">
                                    <h2>Zakynthos</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="places_item">
                                <a href="#">
                                    <img src="./assets/HomeIMG/place2.jpg" alt="" />
                                </a>
                                <div className="place_name">
                                    <h2>Navagio - Zakynthos</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="places_item">
                                <a href="#">
                                    <img src="./assets/HomeIMG/place3.jpg" alt="" />
                                </a>
                                <div className="place_name">
                                    <h2>Santorini</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className="places_item">
                                <a href="#">
                                    <img src="./assets/HomeIMG/place4.jpg" alt="" />
                                </a>
                                <div className="place_name">
                                    <h2>Acropolis</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="places_item">
                                    <a href="#">
                                        <img src="./assets/HomeIMG/place5.jpg" alt="" />
                                    </a>
                                    <div className="place_name">
                                        <h2>Naxos</h2>
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="places_item">
                                <a href="#">
                                    <img src="./assets/HomeIMG/place6.jpg" alt="" />
                                </a>
                                <div className="place_name">
                                    <h2>Rodos</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="places_item">
                                <a href="#">
                                    <img src="./assets/HomeIMG/place7.jpg" alt="" />
                                </a>
                                <div className="place_name">
                                    <h2>Mykonos</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home5