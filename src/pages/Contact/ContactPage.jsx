import React from 'react';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./ContactPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import luluRemiBlack from "../../assets/luluRemiBlack.PNG";   

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <section className="ContactPageContainer">
      <div className='ContatoTextContainer'>
        <img src={luluRemiBlack} alt="Home Banner" data-aos="fade-right" className="LogoContactPage" /> 
        <h1 className="ContactPageCTA" data-aos="fade">Let's talk!</h1>
        <p className='ContanctPageText'>We’d love to hear from you! Whether it’s a question, an idea, or just to say hello. <br></br>Let’s grow this community together!</p>
      </div>
      <form className="container my-4 ContactForm">
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input type="Name" className="form-control InputContainer" id="Name" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control InputContainer" id="email" aria-describedby="emailHelp"/>
        </div>
         <div className="form-group">
          <label htmlFor="Subject">Subject</label>
          <input type="email" className="form-control InputContainer" id="email" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control InputContainer" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>
        <div className='ButtonContainer'>   
          <button type="submit" className="btn btn-primary SendButton ">Send!</button>
        </div>
      </form>
    </section>
    <Footer/>
    </>
  );
};

export default ContactPage;