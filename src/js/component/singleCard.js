import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCard = ({ title, idToRender, data }) => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	let opciones;
	let planetas = ["Climate", "Population", "Terrain", "Gravity", "Diameter"];
	let personajes = ["Gender", "Height", "Birth Year", "Mass", "Eye Color"];
	return (
		<div className="jumbotron">
			<h1 className="display-4" />
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">
				{store[title.toLowerCase()].map((item, index) => {
					if (item.hasOwnProperty("climate")) {
						opciones = planetas;
					} else {
						opciones = personajes;
					}

					if (index == idToRender) {
						return (
							<div key={index} className="container mt-2">
								<div className="card mb-3">
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://via.placeholder.com/800x600"
												className="card-img"
												alt="..."
											/>
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title">{item.name}</h5>
												<p className="card-text">texto de ...</p>
											</div>
										</div>
									</div>
								</div>
								<div className="row more-info">
									<div className="col">
										<h3>Name</h3>
										<p>{item.name}</p>
									</div>
									<div className="col">
										<h3>{opciones[0]}</h3>
										<p>{item.climate || item.gender}</p>
									</div>
									<div className="col">
										<h3>{opciones[1]}</h3>
										<p>{item.population || item.height}</p>
									</div>
									<div className="col">
										<h3>{opciones[2]}</h3>
										<p>{item.terrain || item.birth_year}</p>
									</div>
									<div className="col">
										<h3>{opciones[3]}</h3>
										<p>{item.gravity || item.mass}</p>
									</div>
									<div className="col">
										<h3>{opciones[4]}</h3>
										<p>{item.diameter || item.eye_color}</p>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

SingleCard.propTypes = {
	title: PropTypes.string,
	item: PropTypes.array,
	data: PropTypes.array,
	type: PropTypes.string,
	idToRender: PropTypes.any
};
