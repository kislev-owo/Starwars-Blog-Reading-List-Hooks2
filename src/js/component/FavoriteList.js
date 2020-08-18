import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// Funcion Favorites con dropdwon list
export const Favorites = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	// let badgeNumber = 0;
	//let name = item.id;
	// En el contador Donde esta badgeNumber debería ir {favorites.length}, que es la longitud del arreglo.
	console.log(store.favorites);
	console.log(`${store.favorites} se lee`);

	return (
		<div className="ml-auto">
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
					<span className="badge badge-light">{store.favorites.length}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<>
						{store.favorites.map((favorite, index) => {
							return (
								<Dropdown.Item
									className="d-flex justify-content-between align-items-center"
									key={index}
									as="div"
									onClick={e => history.push(favorite.url)}>
									{favorite.name}
									<i
										className="fa fa-trash ml-auto"
										aria-hidden="true"
										onClick={event => {
											actions.DeleteFavorite(index);
										}}
									/>
								</Dropdown.Item>
							);
						})}
						{/* {store.favorites.map((type, index) => {
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
						})} */}
					</>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

Favorites.propTypes = {};

//    {favorites.map((item, index) => {}}
