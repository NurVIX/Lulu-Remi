import React, {useState, useEffect, use} from "react";
import BuyButton from "../../components/buyButton/BuyButton.jsx";
import ProductDisplayCarousel from "../../components/ProductCarousel/productCarousel.jsx";
import BrandPillars from "../../components/BrandPillars/BrandPillars.jsx";
import ProductCard, {products} from "../../components/ProductCard/ProductCard.jsx";
import "./Home.css"; 
import TestimonialCard, {Testimonials} from "../../components/Testimonials/testimonials.jsx";


import luluRemiBlack from "../../assets/luluRemiBlack.PNG";   
import CoverSukkot from "../../assets/CoverSukkot.png";
import CoverSukkotfaceup from "../../assets/CoverSukkotfaceup.png";
import CoverSukkotfaceup2 from "../../assets/CoverSukkotfaceup2.png";
import Color_it from "../../assets/Color_it.png";
import Peel_it from "../../assets/Peel_it.png";
import Play_it from "../../assets/Play_it.png";



const handleSeeDetails = (p) => console.log("see Details:", products);



const Home = () => {

    const[s, setS] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setS((n) => (n + 1) % Testimonials.length), 3000);
        return () => clearInterval(id);
    }, []);
    return (
        <div className="HomeContainer">
            <section className="HeroSection">
                <img src={luluRemiBlack} alt="Home Banner" className="HeroLogo" /> 
                <h1 className="HeroCTA">Where every page turns into a world of sticker fun!</h1>
                <div className="HeroButtonContainer">
                    <BuyButton/> 
                </div>
            </section>
            <section className="HeroDescriptionSection">
                <h2 className="HeroDescriptiontext">Color it, peel it, stick it! <br></br>Creativity that sticks with you!</h2>   
                <ProductDisplayCarousel/> 
            </section>
            <section  className="HeroDescriptionSectionthree">
                <h2 className="HeroDescriptionSectionThreeText">It’s more than a coloring book,
                it sticks with you.</h2>
                <img src={CoverSukkot} alt="Sukkot Cover" className="SukkotCoverImage" />
            </section>
            <section className="HeroDescriptionSectionfour">
                <div className="SukkotCoverImageSectionFour"> 
                    <img src={CoverSukkotfaceup} alt="Sukkot Cover Face Up" className="SukkotCoverImageFaceUp" />
                    <img src={CoverSukkotfaceup2} alt="Sukkot Cover Face Up" className="SukkotCoverImageFaceUp" />
                </div>
                <div className="howToImagesSection">
                    <img src={Color_it} alt="Color_it" className="Color_it" />
                    <img src={Peel_it} alt="Peel_it" className="Peel_it" />
                    <img src={Play_it} alt="Play_it" className="Play_it" />
                    <BuyButton/>
                </div>
            </section>
            <BrandPillars/>
            <section className="HeroDescriptionSectionfive">
                <div className="HeroDescriptionSectionFiveText">
                    <h1>Coloring books with Lulu&Remi</h1>
                    <h3>Shop our favorite coloring books!</h3>
                </div>
                <div className="ProductGrid">
                        {products.map((p) =>(
                        <div key={p.id}>   
                            <ProductCard product={p} onSeeDetails={handleSeeDetails}/>
                        </div>
                ))}
                </div>
            </section>
            <section className="">
                <TestimonialCard Testimonials={Testimonials[s]}/>
            </section>
        </div>      
        
    );
};

export default Home;