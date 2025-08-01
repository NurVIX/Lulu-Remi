import React from "react";
import BuyButton from "../../components/buyButton/BuyButton.jsx";
/*import ProductCarousel from "../../components/productCarousel/ProductCarousel.jsx";*/
import luluRemiBlack from "../../assets/luluRemiBlack.PNG";   
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
            <section className="HeroDescriptionSectio">
                <h2 className="HeroDescriptiontext">Color it, peel it, stick it! <br></br>Creativity that sticks with you!</h2>
                {/*<ProductCarousel />*/}
            </section>
            
        </div>      
        
    );
};

export default Home;