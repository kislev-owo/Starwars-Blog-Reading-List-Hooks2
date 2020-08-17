import React, { useState, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Funcion Favorites con dropdwon list
export const Favorites = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	let badgeNumber = 0;
	//let name = item.id;
	// En el contador Donde esta badgeNumber debería ir {favorites.length}, que es la longitud del arreglo.
	return (
		<div className="ml-auto">
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
					<span className="badge badge-light">{badgeNumber}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((current, index) => {
						return (
							<div className="d-flex justify-content-between align-items-center" key={index}>
								<Dropdown.Item href="#/1" className="">
									<Link to={current.stringToPush}>{current.stringToDisplay}</Link>
								</Dropdown.Item>
								<i
									className="fa fa-trash"
									aria-hidden="true"
									onClick={event => {
										actions.DeleteFavorite(current.stringToDisplay);
									}}
								/>
							</div>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

//    {favorites.map((item, index) => {}}
