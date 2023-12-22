import React from "react";
import "./HeroSection.css";
import Headphone from "../../Assests/vibrating-headphone 1.png";
const HeroSection = () => {
	return (
		<div className="hero_section">
			<div className="hero-text">
				<h1>
					100 Thousand Songs, ad-free <br />
					Over thousands podcast episodes
				</h1>
			</div>
			<div>
				<img src={Headphone} alt="" srcset="" />
			</div>
		</div>
	);
};

export default HeroSection;
