import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // importamos dependencias
import PropTypes from "prop-types";
import { DisplayList } from "./D_DisplayList";
import { EmptyList } from "./C_EmptyList";

// Funcion Favorites con dropdwon list
export const Favorites = props => {
	// antes de entrar en el return se hace el condicional
	const { store, actions } = useContext(Context);
	// importamos props store de useContext

	console.log(`${store.favorites} aqui leemos todo el array de la api`);

	// Bloque de código para chequear si la lista de Favoritos está vacía
	var listContent;
	if (store.favorites.length != 0) {
		// si la longitud de favorites es distinta a 0 entonces renderiza DisplayList sino renderiza emptylist y se guarda en la variable listContent
		listContent = <DisplayList />;
	} else {
		listContent = <EmptyList />;
		console.log("Lista de Favoritos vacía");
	}
	// luego del condicional tenemos un valor en listContent y lo usamos abajo en return
	return (
		<div className="ml-auto">
			{/*creamos un div con margen auto*/}
			<Dropdown>
				{/*renderizamos a dropdown boostrap*/}
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
					{/*renderizamos a dropdown.toggle (lengua) boostrap como primario y le ponemos de nombre favorites*/}
					<span className="badge badge-light">
						{store.favorites.length}
						{/*el badge es el espacio en blanco a la derecha  donde se escribe el numero que va aumentando de los favoritos de store.favories.length*/}
					</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<>{listContent}</>
					{/*renderizamos a dropdown.Menu boostrap y agregamos a lo que tenga contenido listContent (nombre del seleccionado en D_DisplayList)*/}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

Favorites.propTypes = {};
