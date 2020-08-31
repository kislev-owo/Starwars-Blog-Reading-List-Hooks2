import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
// importamos dependencias

// Funcion EmptyList para mostrar mensaje de Lista vacía
export const EmptyList = props => {
	//exportamos la funcion EmptyList con props no se por que francisco puso props si no son utilizadas luego le pregunto.
	return (
		<>
			<Dropdown.Item>
				<>--Empty--</>
				{/*renderizamos a dropdown.Item de boostrap y escribimos la palabra empty para que aparezca cuando el valor de favorites sea 0*/}
			</Dropdown.Item>
		</>
	);
};

EmptyList.propTypes = {};
