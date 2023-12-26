import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./FilterTab.module.css";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export default function FilterTab({ filters, selectedIndex, setIndex }) {
	const handleChange = (event, newValue) => {
		setIndex(newValue);
	};
	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	return (
		<div>
			<Tabs
				value={selectedIndex}
				onChange={handleChange}
				aria-label="basic tabs example"
				TabIndicatorProps={{
					style: {
						backgroundColor: "var(--color-primary)",
					},
				}}
			>
				{filters.map((ele, idx) => {
					return (
						<Tab
							className={styles.tab}
							key={ele.key}
							label={ele.label}
							{...a11yProps(idx)}
						/>
					);
				})}
			</Tabs>
			{filters.map((ele, idx) => {
				return (
					<TabPanel key={ele.key} value={ele.label} index={idx}></TabPanel>
				);
			})}
		</div>
	);
}
