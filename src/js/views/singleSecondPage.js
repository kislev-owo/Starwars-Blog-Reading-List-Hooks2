import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleCard } from "../component/G_singleCard";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams(); // params.type, params.index

	return (
		<div className="jumbotron">
			{/* creamos un jumbotron en la segunda pagina */}

			<hr className="my-4" />

			<div className="mt-3">
				<SingleCard title={params.type} idToRender={params.index} />
			</div>
			{/*aqui useParams funciona como añadiendo el titulo al renderizado de singleCard donde el type es el nombre del titulo definido y idToRender es igual al index del parametro*/}

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	title: PropTypes.string
};
