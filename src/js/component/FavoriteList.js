import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { DisplayList } from "./DisplayList";
import { EmptyList } from "./EmptyList";

// Funcion Favorites con dropdwon list
export const Favorites = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	console.log(store.favorites);
	console.log(`${store.favorites} se lee`);

	// Bloque de código para chequear si la lista de Favoritos está vacía
	var listContent;
	if (store.favorites.length != 0) {
		listContent = <DisplayList />;
	} else {
		listContent = <EmptyList />;
		console.log("Lista de Favoritos vacía");
	}

	return (
		<div className="ml-auto">
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
					<span className="badge badge-light">{store.favorites.length}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<>{listContent}</>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

Favorites.propTypes = {};
