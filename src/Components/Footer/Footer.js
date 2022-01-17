import React from 'react'
import './Footer.css'
import { FaGooglePlusG,FaLinkedinIn,FaPinterest,FaMapMarkerAlt,FaFax} from 'react-icons/fa';
import { ImFacebook ,ImTwitter} from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { GiRotaryPhone} from 'react-icons/gi';
import {MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <>
            <footer>
        <div className="asosiy">
        <div className="container">
        <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-xxl-3 footer_col">
        <div className="about">
        <a href="#"><img className="logo" src="./assets/logo.svg" height="32" alt="Logo"/></a>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
        </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-xxl-3 footer_col">
        <h5>Latest News</h5>
        <ul className="blog_posts">
        <li><a href="#">Live your myth in Greece</a> <small>AUGUST 13, 2016</small></li>
        <li><a href="#">Zante Hotel in pictures</a> <small>AUGUST 16, 2016</small></li>
        <li><a href="#">Zante Hotel family party</a> <small>SEPTEMBER 15, 2016</small></li>
        </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-xxl-3 footer_col">
        <h5>Useful Links</h5>
        <ul className="useful_links">
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Location</a></li>
        </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-xxl-3 footer_col">
        <h5>Contact Us</h5>
        <address>
        <ul className="address">
        <li><i className="glyphicon glyphicon-map-marker"> <FaMapMarkerAlt/> </i> 25, Navagio Zakynthos, Greece</li>
        <li><i className="glyphicon glyphicon-phone-alt"> <GiRotaryPhone/> </i> Phone: +998 93 125 51 27 </li>
        <li><i className="fa fa-fax"> <FaFax/> </i> Fax: 800 123 3456</li>
        <li><i className="fa fa-envelope"><MdEmail/> </i> Email:  <a href="#">loremispum5@gmail.com</a></li>
        </ul>
        </address>
        </div>
        </div>
        </div>
        </div>
        <div className="subfooter">
        <div className="container">
        <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6 ">
        <div className="copyrights">
        Copyright 2022 yanvar <a href="">Zante Hotel</a> All Rights Reserved.
        </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6 ">
        
            <ul  className="social_media">
                <li className='fk f' > <a href="#" className='fa'> <ImFacebook className='facebook' /> </a> </li>
                <li className='fk t'> <a href="#" className='ft'> <ImTwitter className='twitter'/> </a> </li>
                <li className='fk g'> <a href="#" className='fg'> <FaGooglePlusG className='google' /> </a> </li>
                <li className='fk l'> <a href="#" className='fl'> <FaLinkedinIn className='linced' /> </a> </li>
                <li className='fk i'> <a href="#" className='fi'> <FiInstagram className='instagram'/> </a> </li>
                <li className='fk p'> <a href="#" className='fp'> <FaPinterest className='pinteres'/> </a> </li>
            </ul>
    
        
        </div>
        </div>
        </div>
        </div>
        </footer>
        </>
    )
}

export default Footer
