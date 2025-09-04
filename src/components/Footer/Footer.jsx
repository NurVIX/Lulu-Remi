import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="FooterContainer">
            <div className="SubscribeSection">
                    <h3>Subscribe to Lulu&Remi's newsletter and unlock 10% off!</h3>
                    <input type="email" className="NewsletterInput"/>
                    <button className="SubscribeButton">Subscribe</button>
                    <p>By subscribing, you acknowledge that you have read & agree to Lulu&Remi’s terms of use & privacy policy. </p>
            </div>
            <div className="footerSopportLinks">
                <div className="supportLinks">
                    <h3>Support</h3>
                    <a className="SocialIcon" href="">About Us</a>
                    <a className="SocialIcon" href="">Contact Us</a>
                    <a className="SocialIcon" href="">FAQ</a>
                </div>
                <div className="SocialContent">
                    <a href=""><i className="SocialIcon bi bi-instagram"></i></a>
                    <a href=""><i className="SocialIcon bi bi-facebook"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;