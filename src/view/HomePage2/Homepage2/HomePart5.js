import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from 'react';
import { MdWaves } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import './HomePart5.css'

function HomePart5() {
    return (
        <>
            <section className="homePage">
                <div className="container">
                    <div className="main_titles mt_wave a_center">
                        <h2>LOCATION - CONTACT US</h2>
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
                        <div className="col-md-6">

                            <YMaps>
                                <div>
                                    <Map className="HomeMaps"
                                        defaultState={{
                                            center: [40.385440, 71.785580],
                                            zoom: 18,
                                            controls: [],
                                        }}

                                    >
                                        <Placemark geometry={[40.385440, 71.785580]} />
                                    </Map>
                                </div>
                            </YMaps>


                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="contact-items HomeiTems">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="contact-item">
                                            <HiLocationMarker className="iHome"/>
                                            <h6>Technobeck</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="contact-item">
                                            <BsFillTelephoneFill className="iHome"/>
                                            <h6>+998990028835</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="contact-item">
                                            <BsFillEnvelopeFill className="iHome" />
                                            <a href="http://technobeck.uz/">
                                                <h6>technobeck.uz</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <form action="" className="contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message" />
                                    </div>
                                    <button className="button btn_lg btn_blue btn_full upper" type="submit">
                                        <TiLocationArrow className="icHome" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePart5
