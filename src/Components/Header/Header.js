import React, { useState,useEffect,useRef } from 'react'
import './Header.css'
import { FaRegCalendarAlt,FaPhoneAlt } from 'react-icons/fa';
import {AiOutlineMail  } from 'react-icons/ai';

function Header() {

 
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  

    return (
     
        
        <>

    


           <div className="container-fluid "  >
          
           <div className="row rownav">
             <div className="col-md-12 align-self-center top_col0">
                 <div className="container">
                 <div className="row top_row align-items-center">
                    <div className="col-md-6 top_col align-self-center">
                      <p>Welecom to Zante Hotel</p>
                    </div>
                    <div className="col-md-6 top_col align-self-center" >
                      <ul className='top_ul'>
                        <li> <a href="#"> <FaPhoneAlt/> +998 93 125 51 27 </a> </li>
                        <li> <a href="#"> <AiOutlineMail/> tursunovakmal455@gmail.com </a> </li>
                        <li className=''> <a href="#"> 
                          <form action="">
                            <select name="" id="top_select">
                              <option value="">Enflish</option>
                              <option value="">Italiano</option>
                              <option value="">Ruskiy</option>
                              <option value="">O'zbek</option>
                            </select>
                          </form>
                          </a> </li>
                      </ul>
                    </div>
                  </div>
                 </div>
             </div>
             {/* aaa */}
             <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <div className="col-md-12 sticky-inner">
                <div className="container " style={{"background": "#fff"}}>
               
        <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid container1">

      <a className="navbar-brand" href="#">
      <img src="./assets/logo.svg" alt="" className='logo_img'/>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse collapse1" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul1">
      <li className="nav-item dropdown  simple_menu active li11">
          <a className="nav-link dropdown-toggle color " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu ul2" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Home Version 1</a></li>
            <li><a className="dropdown-item" href="#">Home Version 2</a></li>
            <li><a className="dropdown-item" href="#">Home Version 3</a></li>

            <li><a className="dropdown-item" href="#">Home Version 4</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown li11">
          <a className="nav-link dropdown-toggle color coloractive" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rooms
          </a>
          <ul className="dropdown-menu ul2" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Rooms List View</a></li>
            <li><a className="dropdown-item" href="#">Rooms Grid View</a></li>
            <li><a className="dropdown-item" href="#">Rooms Block View</a></li>
            <li><a className="dropdown-item" href="#">Room Details 1</a></li>
            <li><a className="dropdown-item" href="#">Room Details 2</a></li>
          </ul>
        </li>
    <li className="nav-item dropdown mega_menu mega_menu_fullwidth li11">
          <a className="nav-link dropdown-toggle color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          </a>
        
        <ul className="dropdown-menu ul2 mega_page" aria-labelledby="navbarDropdown">
            <li>
<div className ="mega_menu_inner ">
<div className="row  ">
<ul className="col-md-4 ul_md">
<li className="list_title">PAGES</li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery.html">Gallery 4 Columns</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery-3columns.html">Gallery 3 Columns</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery-2columns.html">Gallery 2 Columns</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery-withoutdetails.html">Gallery Without Details</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery-withoutfilters.html">Gallery Without Filters</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery-slider.html">Gallery Slider</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/gallery2.html">Gallery Version 2</a></li>
</ul>
<ul className="col-md-4 ul_md">
<li className="list_title">PAGES</li>
<li><a href="https://preview.eagle-themes.com/html/zante/contact2.html">Contact Us Version 2</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/about-us.html">About Us</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/404.html">404 Page Version 1</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/404-v2.html">404 Page Version 2</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/coming-soon.html">Coming Soon</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/location.html">Our Location</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/restaurant.html">Our Restaurant</a></li>
</ul>

<ul className="col-md-4 ul_md">
<li className="list_title">MORE PAGES</li>
<li><a href="https://preview.eagle-themes.com/html/zante/loading.html">Loading Page </a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/loading2.html">Loading Page 2</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/loading3.html">Loading Page 3</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/full-width.html">Full Width Page</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/right-sidebar.html">Right Sidebar Page</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/left-sidebar.html">Left Sidebar Page</a></li>
<li><a href="https://preview.eagle-themes.com/html/zante/our-staff.html">Our Staff</a></li>
</ul>
</div>
</div>
            </li>
           
        </ul>
      
       
    </li>
        <li className="nav-item dropdown li11">
          <a className="nav-link dropdown-toggle color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Elements 
          </a>
          <ul className="dropdown-menu ul2" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Typography</a></li>
            <li><a className="dropdown-item" href="#">Buttons</a></li>
            <li><a className="dropdown-item" href="#">Icons</a></li>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link color" href="#">Contactus</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link color" href="#">Blog</a>
        </li>
       
       
        <li className="menu_button nav-item">
<a href="#" className="but  btn_yellow"> <FaRegCalendarAlt/>  BOOK ONLINE</a>
</li>
        
      </ul>
      <form className="d-flex">
        
      </form>
    </div>
 
  </div>
        </nav>
            </div>
                
                </div>
                </div>


                {/* aaa */}
            </div>
           </div>
        </>
       
    )
}

export default Header
