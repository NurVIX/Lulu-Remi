"use client"; // because Home uses hooks and AOS

import { useState, useEffect, useRef} from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.css";


import ProductGrid from "./../components/ProductGrid/ProductGrid.jsx";
import BuyButton from "../components/buyButton/BuyButton.jsx";
import ProductDisplayCarousel from "../components/ProductCarousel/ProductCarousel.jsx";
import BrandPillars from "../components/BrandPillars/BrandPillars.jsx";
import WholesalesButton from "../components/Wholesales_button/Wholesales_button.jsx";
import TestimonialCard, { testimonials } from "../components/Testimonials/Testimonials.jsx";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [s, setS] = useState(0);
  const productRef = useRef(null);

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  //  init AOS
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  //  auto-change testimonials
  useEffect(() => {
    const id = setInterval(
      () => setS((n) => (n + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.HomeContainer}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <Image
          src="/images/luluRemiBlack.PNG"
          alt="Home Banner"
          data-aos="fade-right"
          className={styles.HeroLogo}
          width={300}
          height={400}
        />
        <h1 className={styles.HeroCTA} >
          Where every page turns into a world of sticker!
        </h1>
        <div className={styles.HeroButtonContainer}>
          <BuyButton onClick={scrollToProducts} />
        </div>
      </section>

      {/* Description Section */}
      <section className={styles.HeroDescriptionSectionthree} data-aos="fade">
        
        <Image
          src="/images/CoverSukkot.png"
          alt="Sukkot Cover"
          data-aos="fade-right"
          className={styles.SukkotCoverImage}
          width={500}
          height={600}
        />
        <h2
          className={styles.HeroDescriptionSectionThreeText}
          data-aos="fade-left">
            It’s more than a coloring book, 
            <br></br>
            it sticks with you!
        </h2>
      </section>

      {/* Carousel Section */}
      <section className={styles.HeroDescriptionSection} data-aos="fade">
        <h2 className={styles.HeroDescriptiontext} data-aos="fade">
          Color it, peel it, stick it! <br /> Creativity that sticks with you!
        </h2>
        <div className={styles.CarouselBackground} id="products">
          <ProductDisplayCarousel />
        </div>
      </section>

      {/* Extra Images */}
      <section className={styles.HeroDescriptionSectionfour}>
        
        <div className={styles.howToImagesSection}>
          <Image
            src="/images/Color_it.png"
            alt="Color it"
            className={styles.Color_it}
            data-aos="zoom-in"
            width={200}
            height={200}
          />
          <Image
            src="/images/Peel_it.png"
            alt="Peel it"
            className={styles.Peel_it}
            data-aos="zoom-in"
            width={200}
            height={200}
          />
          <Image
            src="/images/Play_it.png"
            alt="Play it"
            className={styles.Play_it}
            data-aos="zoom-in"
            width={200}
            height={200}
          />
          <div  data-aos="zoom-in">
            <BuyButton onClick={scrollToProducts} />
          </div>
          
        </div>
        <div className={styles.SukkotCoverImageSectionFour}>
          <Image
            src="/images/CoverSukkotfaceup.png"
            alt="Sukkot Cover Face Up"
            data-aos="zoom-in"
            className={styles.SukkotCoverImageFaceUp}
            width={500}
            height={500}/>
          <Image
            src="/images/CoverSukkotfaceup2.png"
            alt="Sukkot Cover Face Up 2"
            data-aos="zoom-in"
            className={styles.SukkotCoverImageFaceUp}
            width={500}
            height={500}/>
        </div>
      </section >
       {/* Brand Pillars */}
      <section  className={styles.BrandpillarSection}> 
        <BrandPillars  />
      </section>
      {/* Products Section */}
      <section className={styles.HeroDescriptionSectionfive}>
        <div className={styles.HeroDescriptionSectionFiveText} >
          <h1 className={styles.CTASectionFive} data-aos="fade">Bring stories to life with Lulu & Remi’s coloring books!</h1>
          <h2 className={styles.CTASectionFive} data-aos="fade">
            Check out our collections:
          </h2>
        </div>
        {/* product Grid display */}
        <div ref={productRef} className={styles.ProductGridContainer} data-aos="zoomIn">
          <ProductGrid />
        </div>
        <div className={styles.WholesalesButtonContainer}>
          <Link  href="/contact?form=wholesale">
            <WholesalesButton />
          </Link>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialCard testimonial={testimonials[s]} />
    </div>
  );
}
