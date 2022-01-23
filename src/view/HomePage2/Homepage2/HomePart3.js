import './HomePart3.css'
import { MdWaves } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function HomePart3(){
    return(
        <>
            <section id="about_style_2" className="blue_bg">
                <div className="container-fluid Homes">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 HomeIskust">
                            <div className="row ClasHome">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <div className="about_img_1">
                                        <div className="about_img_inner">
                                            <img src="./assets/HomeIMG/caretta_caretta.jpg" className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 about_img_2_col">
                                    <div className="about_img_2">
                                        <div className="about_img_inner">
                                            <img src="./assets/HomeIMG/zakynthos.jpg" className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 HomeIskust">
                            <div className="main_titlew mt_wave mt_white a_left">
                                <h2>ZAKYNTHOS - ZANTE</h2>
                                <MdWaves className="iconHomes" />
                            </div>
                            <p className="main_description md_white">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing 
                                elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim 
                                veniam, quis nostrud exerci tation ullamcorper suscipit.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci tation ullamcorper suscipit.Lorem ipsum 
                                dolor sit amet, consectetuer
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
                                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
                                tation ullamcorper suscipit.Lorem ipsum dolor sit amet, consectetuer 
                                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePart3