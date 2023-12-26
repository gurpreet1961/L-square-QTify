import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
const Card = ({ data, type }) => {
	console.log(data);
	const title = data.songs ? data.songs.length + " songs" : null;
	return (
		<Tooltip title={title} arrow>
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
		</Tooltip>
	);
};

export default Card;
