import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./B_FavoriteList"; // importamos dependencias
import starWarsImage from "../../img/Star-wars-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
	// exportamos la funcion Navbar
	return (
		// adentro del return realizamos la funcion
		<nav className="navbar navbar-light bg-light mb-3">
			{" "}
			{/*creamos el container navbar con margen bottom -3*/}
			<Link to="/">
				{" "}
				{/*la imagen redirecciona a la pagina principal*/}
				<span className="navbar-brand mb-0 h1">
					{" "}
					{/*div de la imagen*/}
					<img width="70px" height="50px" border-radius="50%" src={starWarsImage} /> {/*css en la imagen*/}
				</span>
			</Link>
			<div className="ml-auto">
				{" "}
				{/*creamos un div para favorites*/}
				<Favorites />
			</div>
		</nav>
	);
};
