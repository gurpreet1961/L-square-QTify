import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<Search placeholder="Search a album of your choice" />
			<Button>Give Feedback</Button>
		</nav>
	);
};

export default Navbar;
