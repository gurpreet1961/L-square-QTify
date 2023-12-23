import React from "react";
import styles from "./Card.module.css";
const Card = ({ data, type }) => {
	// console.log(data);
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<img src={data.image} alt="song" loading="lazy" />
				<div className={styles.banner}>
					<div id={styles.pill}>
						{type === "song" ? (
							<p>{data.likes} Likes</p>
						) : (
							<p>{data.follows} Follows</p>
						)}
					</div>
				</div>
			</div>
			<div className={styles.titleWrapper}>
				<p>{data.title}</p>
			</div>
		</div>
	);
};

export default Card;
