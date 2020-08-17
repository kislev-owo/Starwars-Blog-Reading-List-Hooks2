import React from "react";
import { Link } from "react-router-dom";

import { Favorites } from "./FavoriteList";

import starWarsImage from "../../img/Star-wars-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img width="70px" height="50px" border-radius="50%" src={starWarsImage} />
				</span>
			</Link>
			<div className="ml-auto">
				<Favorites />
			</div>
		</nav>
	);
};
