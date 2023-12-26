import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import FilterTab from "../FilterTab/FilterTab";
const Section = ({ title, data, filterSource, type }) => {
	const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
	const [filterIndex, setFilterIndex] = useState(0);
	useEffect(() => {
		if (filterSource) {
			filterSource().then((res) => {
				const { data } = res;
				setFilters([...filters, ...data]);
			});
		}
	}, []);

	const showFilter = filters.length > 1;
	const [carouselToggle, setCrouselToggle] = useState(true);
	const handleToggle = () => {
		setCrouselToggle((prevState) => !prevState);
	};
	const cardToRender = data.filter((card) =>
		showFilter && filterIndex !== 0
			? card.genre.key === filters[filterIndex].key
			: card
	);
	return (
		<div>
			<div className={styles.header}>
				<h3>{title}</h3>
				{!showFilter && (
					<h4 className={styles.toggleText} onClick={handleToggle}>
						{carouselToggle ? "Show all" : "Collapse"}
					</h4>
				)}
			</div>
			{showFilter && (
				<div className={styles.filterWapper}>
					<FilterTab
						filters={filters}
						selectedIndex={filterIndex}
						setIndex={setFilterIndex}
					/>
				</div>
			)}
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
							data={cardToRender}
							renderCardComponent={(item) => <Card data={item} type={type} />}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Section;
