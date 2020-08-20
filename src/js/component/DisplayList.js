import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// Funcion DisplayList para mostrar Lista de Favoritos
export const DisplayList = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<>
			{store.favorites.map((favorite, index) => {
				return (
					<div className="d-flex justify-content-between align-items-center" key={index}>
						<Dropdown.Item as="div" onClick={e => history.push(favorite.url)}>
							{favorite.name}
						</Dropdown.Item>
						<i
							className="fa fa-trash ml-auto"
							aria-hidden="true"
							onClick={event => {
								console.log(`${favorite.name} se eliminó de favoritos`);
								actions.DeleteFavorite(index);
							}}
						/>
					</div>
				);
			})}
		</>
	);
};

DisplayList.propTypes = {};
