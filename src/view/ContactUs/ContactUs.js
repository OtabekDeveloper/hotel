import React, { useState } from 'react';
import './ContactUs.css';
import { FaGooglePlusG,FaLinkedinIn,FaPinterest,FaMapMarkerAlt,FaFax} from 'react-icons/fa';
import { ImFacebook ,ImTwitter} from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { YMaps, Map } from 'react-yandex-maps';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function ContactUs() {
    const [obj, setObj] = useState({
        // name : '',
        // phone: 3434,
        // email: '',
       
        // subject: '',
        // message: ''
        userId: 1,
        id: 11,
        title: '',
        body: ''
    })

    const ChangeHandler = (e) =>{
        setObj({...obj, [e.target.name]: e.target.value})
    }
    

    const SendForm =(e)=>{
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'post',
            body: obj,
        })
        
        .then(respons => console.log(respons))
        .catch((err)=> console.log(err))
        e.preventDefault()
        
        
        
    }
    
    return (
        <>
           

            <Header/>
           <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                <YMaps >
          <div> 
           
          <Map defaultState={{ center: [47.75, 57.57], zoom: 9 }} style={{height: '400px', weidth: '100%'}} />
          </div>
         </YMaps>
                </div>

           </div>
            <div id="contact_page">
<div className="container">
<div className="row">
<div className="col-md-8">
<div className="main_title a_left">
<h2>CONTACT US</h2>
</div>
<form id="contact-form-page" onSubmit={SendForm}>
<div className="row">
<div className="form-group col-md-6 col-sm-6">
<label className="control-label">Name</label>
<input type="text" className="form-control" name="title" placeholder="Your Name" value={obj.title} onChange={ChangeHandler}/>
</div>
<div className="form-group col-md-6 col-sm-6">
<label className="control-label">Phone</label>
<input type="text" className="form-control" name="body" placeholder="Phone" value={obj.body} onChange={ChangeHandler}/>
</div>
<div className="form-group col-md-6 col-sm-6">
<label className="control-label">Email</label>
<input type="email" className="form-control" name="email" placeholder="Your Email" value={obj.email} onChange={ChangeHandler}/>
</div>
<div className="form-group col-md-6 col-sm-6">
<label className="control-label">Subject</label>
<input type="text" className="form-control" name="subject" placeholder="Subject" value={obj.subject} onChange={ChangeHandler}/>
</div>
<div className="form-group col-md-12">
<label className="control-label">Message</label>
<textarea className="form-control" name="message" placeholder="Your Message..." value={obj.message} onChange={ChangeHandler}></textarea>
</div>
<div className="form-group col-md-12">
<button type="submit" className="button  btn_blue mt40 upper pull-right ">
<i className="fa fa-paper-plane-o" aria-hidden="true"></i> Send Your Message
</button>
</div>
</div>
</form>
</div>
<div className="col-md-4">
<div className="main_titlea a_left">
<h2>GET IN TOUCH</h2>
</div>
<ul className="contact-info upper">
<li>
<span>ADDRESS:</span> Navagio Zakynthos, Greece
</li>
<li>
<span>EMAIL:</span> example@site.com, contact@site.com
</li>
<li>
<span>WEB:</span> www.site.com
</li>
<li>
<span>PHONE:</span>  (+998) <strong>930125051027</strong> +1 (330) <strong>995-445</strong>
</li>
<li>
<span>FAX:</span>
<strong>+1 123456780</strong>
</li>
</ul>
<div className="social_media0">
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
            </div>
            <Footer/>
        </>
    )
}

export default ContactUs
