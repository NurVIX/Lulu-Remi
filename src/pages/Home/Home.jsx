import {React,useState, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/Navbar/Navbar.jsx";
import BuyButton from "../../components/buyButton/BuyButton.jsx";
import ProductDisplayCarousel from "../../components/ProductCarousel/ProductCarousel.jsx";
import BrandPillars from "../../components/BrandPillars/BrandPillars.jsx";
import ProductCard, {products} from "../../components/ProductCard/ProductCard.jsx";
import "./Home.css"; 
import TestimonialCard, {Testimonials} from "../../components/Testimonials/testimonials.jsx";
import Footer from "../../components/Footer/Footer.jsx";


import luluRemiBlack from "../../assets/luluRemiBlack.PNG";   
import CoverSukkot from "../../assets/CoverSukkot.png";
import CoverSukkotfaceup from "../../assets/CoverSukkotfaceup.png";
import CoverSukkotfaceup2 from "../../assets/CoverSukkotfaceup2.png";
import Color_it from "../../assets/Color_it.png";
import Peel_it from "../../assets/Peel_it.png";
import Play_it from "../../assets/Play_it.png";



const handleSeeDetails = (p) => console.log("see Details:", products);



const Home = () => {

    useEffect(() => {
    AOS.init({duration:1500, once: true});
    }, []);

    const[s, setS] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setS((n) => (n + 1) % Testimonials.length), 3000);
        return () => clearInterval(id);
    }, []);
    return (
        <div className="HomeContainer">
            <Navbar/>
            <section className="HeroSection">
                <img src={luluRemiBlack} alt="Home Banner" data-aos="fade-right" className="HeroLogo" /> 
                <h1 className="HeroCTA" data-aos="fade">Where every page turns into a world of sticker fun!</h1>
                <div className="HeroButtonContainer">
                    <BuyButton/> 
                </div>
            </section>
            <section  className="HeroDescriptionSectionthree" data-aos="fade">
                <h2 className="HeroDescriptionSectionThreeText" data-aos="fade-right">It’s more than a coloring book,
                it sticks with you.</h2>
                <img src={CoverSukkot} alt="Sukkot Cover" data-aos="fade-left" className="SukkotCoverImage" />
            </section>
            <section className="HeroDescriptionSection">
                <h2 className="HeroDescriptiontext" data-aos="fade">Color it, peel it, stick it! <br></br>Creativity that sticks with you!</h2>   
                    <ProductDisplayCarousel/>
            </section>
            <section className="HeroDescriptionSectionfour">
                <div className="SukkotCoverImageSectionFour"> 
                    <img src={CoverSukkotfaceup} alt="Sukkot Cover Face Up" data-aos="zoom-in-right" className="SukkotCoverImageFaceUp" />
                    <img src={CoverSukkotfaceup2} alt="Sukkot Cover Face Up" data-aos="zoom-in-right" className="SukkotCoverImageFaceUp" />
                </div>
                <div className="howToImagesSection" data-aos="zoom-in-left">
                    <img src={Color_it} alt="Color_it" className="Color_it" />
                    <img src={Peel_it} alt="Peel_it" className="Peel_it" />
                    <img src={Play_it} alt="Play_it" className="Play_it" />
                    <BuyButton/>
                </div>
            </section>
            <BrandPillars/>
            <section className="HeroDescriptionSectionfive">
                <div className="HeroDescriptionSectionFiveText" data-aos="fade">
                    <h1 className="TestimonialText">Coloring books with Lulu&Remi</h1>
                    <h3 className="TestimonialText">Shop our favorite coloring books!</h3>
                </div>
                <div className="ProductGrid">
                        {products.map((p) =>(
                        <div key={p.id}>   
                            <ProductCard product={p} onSeeDetails={handleSeeDetails}/>
                        </div>
                ))}
                </div>
            </section>
            <TestimonialCard Testimonials={Testimonials[s]}/>
            <Footer/>
        </div>      
        
    );
};

export default Home;