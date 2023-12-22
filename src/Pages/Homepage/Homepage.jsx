import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section from "../../Components/Section/Section";
import { useOutletContext } from "react-router-dom";
import styles from "./Homepage.module.css";
const Homepage = () => {
	const { data } = useOutletContext();
	const { topAlbums, newAlbums, songs } = data;
	return (
		<div>
			<HeroSection />
			{/* <Card /> */}
			<div className={styles.wrapper}>
				<Section title="Top Album" data={topAlbums} type="album" />
				<Section title="New Album" data={newAlbums} type="album" />
				<Section title="Songs" data={songs} type="song" />
			</div>
		</div>
	);
};

export default Homepage;
