import React from "react";
import "./BrandPillar.css";


import SafetyMatters from "../../assets/Safety_Matters_Icon.png";
import craftmanship_Icon from "../../assets/craftmanship_Icon.png";
import Women_Owned_Icon from "../../assets/Women_Owned_Icon.png";
import create_Experience_Icon from "../../assets/create_Experience_Icon.png";
import Designed_NY_Icon from "../../assets/Designed_NY_Icon.png";


const PILLARS = [
    {
        icon: SafetyMatters,
        Title: "Safety Matters",
        text: "Safety is our top priority, every product we offer meets or exceeds all regulatory and safety standards."
    },
    {
        icon: craftmanship_Icon,
        Title: "Craftmanship",
        text: "We are dedicated to exceptional craftsmanship, setting a higher standard in both quality and design."
    },
    {
        icon: Women_Owned_Icon,
        Title: "Woman-Owned",
        text: "Proudly Women-Owned: Empowering creativity, leadership, and innovation. Every product supports a dream in motion."
    },
    {
        icon: create_Experience_Icon,
        Title: "Create Experiences",
        text: "We design playful yet practical products that encourage creativity, self-expression, and joy, for dreamers of every age."
    },
    {
        icon: Designed_NY_Icon,
        Title: "Designed in NY",
        text: "Our products are designed in New York, the place that in known for all the creativity anbd inovations and technologies"
    },
];

export default function BrandPillars() {
    return (
        <section className="Pilars_Container">
            <div className="Inner_Pilar">
                {PILLARS.map((p, i) => (
                    <article className="Pillar_Item" key={i}>
                        <img src={p.icon} alt={p.Title} className="Pillar_Icon_Image" />
                        <p className="Pillar_Icon_Text">{p.text}</p>
                    </article>
                ))}
            </div>
        </section>

    );
};