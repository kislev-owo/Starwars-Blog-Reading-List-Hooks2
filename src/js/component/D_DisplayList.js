// importamos dependencias
import React, { useState, useEffect, useContext } from "react";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// Funcion DisplayList para mostrar Lista de Favoritos
export const DisplayList = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	// exportamos a displayList y importamos propiedades store, actions de useContext y importamos hook history de useHistory

	return (
		<>
			{store.favorites.map((favorite, index) => {
				/*antes del 2do return mapeamos pasandole el array (store.favorites) luego creamos una funcion flecha => y la recibimos como parametro y a su vez recibe como parametro el array favorites y index... entonces q va a sucecer por cada entrada de nuestro store.favorites va a invocar la funcion flecha con los parametros ya definidos de favorites y su index en cada iteracion*/
				return (
					<div className="d-flex justify-content-between align-items-center" key={index}>
						{/*creamos un div con los textos en el centro*/}
						<Dropdown.Item as="div" onClick={e => history.push(favorite.url)}>
							{favorite.name}
							{/*history.push funciona como una redireccion a otra pagina cuando se le da al boton, redirecciona a favorite.url y afuera esta favorite.name osea que cuando se añade a luke skywalker y se le da click el pone eso en la barra espaciadora y redirecciona a ese lugar  https://www.youtube.com/watch?v=WG7NBJQzHmc */}
						</Dropdown.Item>
						<i
							className="fa fa-trash ml-auto"
							aria-hidden="true"
							// arriba creamos una papelera boostrap escondida
							onClick={event => {
								console.log(`${favorite.name} se eliminó de favoritos`);
								actions.DeleteFavorite(index);
								// aqui cuando le damos click a la propiedad favorie.name el activa la accion de deleteFavorite eliminando simplemente la posicion index seleccionada de favorite.name borrandola por completo.
							}}
						/>
					</div>
				);
			})}
		</>
	);
};

DisplayList.propTypes = {};
