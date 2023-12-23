import React, { useState, useEffect } from "react";
import { ReactComponent as RightButton } from "../../../Assests/Group 3740.svg";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";

const CarouselRightNavigation = () => {
	const swiper = useSwiper();

	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
	}, []);
	return (
		<div className={styles.rightNavigation}>
			{!isEnd && <RightButton onClick={() => swiper.slideNext()} />}
		</div>
	);
};

export default CarouselRightNavigation;
