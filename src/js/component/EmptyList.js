import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

// Funcion EmptyList para mostrar mensaje de Lista vacía
export const EmptyList = props => {
	return (
		<>
			<Dropdown.Item>
				<>--Empty--</>
			</Dropdown.Item>
		</>
	);
};

EmptyList.propTypes = {};
