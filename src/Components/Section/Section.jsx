import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
const Section = ({ title, data, type }) => {
	const [carouselToggle, setCrouselToggle] = useState(true);
	const handleToggle = () => {
		setCrouselToggle((prevState) => !prevState);
	};
	return (
		<div>
			<div className={styles.header}>
				<h3>{title}</h3>
				<h4 className={styles.toggleText} onClick={handleToggle}>
					{carouselToggle ? "Show all" : "Collapse"}
				</h4>
			</div>
			{data.length === 0 ? (
				<CircularProgress />
			) : (
				<div className={styles.cardWrapper}>
					{!carouselToggle ? (
						<div className={styles.wrapper}>
							{data?.map((item) => (
								<Card data={item} type={type} key={item.id} />
							))}
						</div>
					) : (
						// carousel
						<Carousel
							data={data}
							renderCardComponent={(item) => <Card data={item} type={type} />}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Section;
