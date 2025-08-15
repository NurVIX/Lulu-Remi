import React from "react";
import BuyButton from "../../components/buyButton/BuyButton.jsx";
import ProductDisplayCarousel from "../../components/ProductCarousel/productCarousel.jsx";

import luluRemiBlack from "../../assets/luluRemiBlack.PNG";   
import  CoverSukkot from "../../assets/CoverSukkot.png";
import CoverSukkotfaceup from "../../assets/CoverSukkotfaceup.png";
import CoverSukkotfaceup2 from "../../assets/CoverSukkotfaceup2.png";
import Color_it from "../../assets/Color_it.png";
import Peel_it from "../../assets/Peel_it.png";
import Play_it from "../../assets/Play_it.png";

import "./Home.css"; 

const Home = () => {
    return (
        <div>
            <section className="HeroSection">
                <img src={luluRemiBlack} alt="Home Banner" className="HeroLogo" /> 
                <h1 className="HeroCTA">Where every page turns into a world of sticker fun!</h1>
                <div className="HeroButtonContainer">
                    <BuyButton/> 
                </div>
            </section>
            <section className="HeroDescriptionSection">
                <h2 className="HeroDescriptiontext">Color it, peel it, stick it! <br></br>Creativity that sticks with you!</h2>   
            </section>
            <ProductDisplayCarousel/>
            <section  className="HeroDescriptionSectionthree">
                <h2 className="HeroDescriptionSectionThreeText">It’s more than a coloring book,
it sticks with you.</h2>
                <img src={CoverSukkot} alt="Sukkot Cover" className="SukkotCoverImage" />
            </section>
            <section className="HeroDescriptionSectionfour">
                <div className="bookCoverImagesSection"> 
                    <img src={CoverSukkotfaceup} alt="Sukkot Cover Face Up" className="SukkotCoverImage" />
                    <img src={CoverSukkotfaceup2} alt="Sukkot Cover Face Up" className="SukkotCoverImage" />
                </div>
                <div className="howToImagesSection">
                    <img src={Color_it} alt="Color_it" className="how_to_images" />
                    <img src={Peel_it} alt="Peel_it" className="how_to_images" />
                    <img src={Play_it} alt="Play_it" className="how_to_images" />
                </div>
            </section>

            
        </div>      
        
    );
};

export default Home;