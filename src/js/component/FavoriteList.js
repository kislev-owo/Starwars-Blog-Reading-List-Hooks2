import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// Funcion Favorites con dropdwon list
export const Favorites = props => {
	const { type } = props;
	const { store, actions } = useContext(Context);

	let badgeNumber = 0;
	//let name = item.id;
	// En el contador Donde esta badgeNumber debería ir {favorites.length}, que es la longitud del arreglo.
	console.log(store.favorites);
	console.log(`${store.favorites} se lee`);

	return (
		<div className="ml-auto">
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
					<span className="badge badge-light">{badgeNumber}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<>
						{store.favorites.map((type, index) => {
							return (
								<div className="d-flex justify-content-between align-items-center" key={index}>
									<Dropdown.Item href="#/1" className="">
										<Link to={store.favorites}>{`${type}`}</Link>
									</Dropdown.Item>
									<i
										className="fa fa-trash"
										aria-hidden="true"
										onClick={event => {
											actions.DeleteFavorite(index);
										}}
									/>
								</div>
							);
						})}
					</>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

Favorites.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string
};

//    {favorites.map((item, index) => {}}
