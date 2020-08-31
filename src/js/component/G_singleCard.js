import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// importamos dependencias

export const SingleCard = ({ title, idToRender, data }) => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	// exportamos a SingleCard y importamos las propiedades title, idToRender, data, history, store actions.
	let opciones;
	let planetas = ["Climate", "Population", "Terrain", "Gravity", "Diameter"];
	let personajes = ["Gender", "Height", "Birth Year", "Mass", "Eye Color"];
	let vehicles = ["Model", "Manufacturer", "Cost_in_credits", "Length", "Max_atmosphering_speed"];
	// creamos unos arreglos llamados para cada opcion cosa q podiamos hacer mapeando store y sacando el item.name pero bueno...
	return (
		<div className="jumbotron">
			{/*creamos un jumbotron boostrap*/}
			<h1 className="display-4" />
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">
				{/*aqui ponemos un flex-row para que esten en columnas divididas*/}
				{store[title.toLowerCase()].map((item, index) => {
					if (item.hasOwnProperty("climate")) {
						opciones = planetas;
					} else if (item.hasOwnProperty("gender")) {
						opciones = personajes;
					} else {
						opciones = vehicles;
					}
					/*antes del 2do return mapeamos pasandole el array (store[tittle definido en homeFirstPage) luego creamos una funcion flecha => y la recibimos como parametro y a su vez recibe como parametro el array item y index... entonces q va a sucecer por cada entrada de nuestro store[tittle va a invocar la funcion flecha con los parametros ya definidos de item y su index en cada iteracion
                            
                     luego del mapeo ya tiene un nombre item y si en el arreglo de store tiene algo llamado climate opciones sera planetas opteniendo todo el array de la misma*/

					if (index == idToRender) {
						{
							/*en este if si ocurre hace esto sino no se que pasa porque nunca lo puso el profesor asique si lo quito no deberia pasar nada e.e*/
						}

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
								{/*todo lo de arriba se saca de boostrap y añadimos solo una imagen*/}
								<hr />
								<div className="row more-info">
									{/*este es un row de columnas*/}
									<div className="col">
										<h3>Name</h3>
										<p>{item.name}</p>
									</div>
									{/*en la primera columna de titulo tenemos un name para todos las iteraciones or*/}
									<div className="col">
										<h3>{opciones[0]}</h3>
										<p>{item.climate || item.gender || item.model}</p>
									</div>
									{/*en la segunda columna y las [n] columnas de titulo tenemos a opciones[n] refiriendonos a que escriba el string que posee opciones en la posicion [n]
                                    luego tenemos 3 or donde en cada iteracion elegira cual item colocar de manera muy parecida funcionan las demas*/}
									<div className="col">
										<h3>{opciones[1]}</h3>
										<p>{item.population || item.height || item.manufacturer}</p>
									</div>
									<div className="col">
										<h3>{opciones[2]}</h3>
										<p>{item.terrain || item.birth_year || item.cost_in_credits}</p>
									</div>
									<div className="col">
										<h3>{opciones[3]}</h3>
										<p>{item.gravity || item.mass || item.length}</p>
									</div>
									<div className="col">
										<h3>{opciones[4]}</h3>
										<p>{item.diameter || item.eye_color || item.max_atmosphering_speed}</p>
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
