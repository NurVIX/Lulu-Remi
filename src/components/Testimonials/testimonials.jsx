import React from "react";
import "./tertimonials.css";

import kid_holding_crayons from "../../assets/kid_holding_crayons.png";

export const Testimonials =[
    {id:1, Message:"My boy absolutely LOVES this coloring book, The moment he opened  he was hooked and flipping through pages and sticking his favorite coloring!", Name: "- Emma S. mom of 5 years old Jake" },
    {id:2, Message:"My daughter can’t get enough of Lulu & Remi! She colors every page with so much excitement and loves choosing her favorite stickers. It’s now her go-to activity after school.", Name: "- Sarah M., mom of 6-year-old Lily" },
    {id:3, Message:"This book is a lifesaver on rainy days! My son sits for hours coloring and decorating the pages. It keeps him happy, creative, and away from screens.", Name: "- Daniel R., dad of 7-year-old Noah" }
];

    
const TestimonialCard = ({Testimonials}) => {  
    const {Message = "", Name = ""} = Testimonials;
    
    return(
        <div className="TestimonialsSection">
                <div className="TestimonialContainer">
                    <h2 className="TestimonialText">TESTIMONIALS</h2>
                    <p className="paragraphTestimonialText">{Message}</p>
                    <p className="paragraphTestimonialText">{Name}</p>
                </div>
                <img src={kid_holding_crayons} alt="Bou Crayons" className="TestimonialImage" />
        </div>)

};

export default TestimonialCard;