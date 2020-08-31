import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// importamos dependencias

export const Row = ({ title, data }) => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	// exportamos a Row y importamos las propiedades title, data, history, store actions.

	const makeColumns = () => {
		return data.map((item, index) => {
			item.id = index;
			/*antes del 2do return mapeamos pasandole el array (data) luego creamos una funcion flecha => y la recibimos como parametro (osea q esta dentro de un parentesis) y a su vez recibe como parametro el array item y index... entonces q va a sucecer por cada entrada de nuestro data va a invocar la funcion flecha con los parametros ya definidos de item y su index igualado a item.id en cada iteracion*/

			return (
				<div key={index} className="col-5">
					<div className="card">
						<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
						{/*creamos el div de la carta y ponemos la imagen en su parte superior q no redirecciona a nada*/}

						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
						</div>
						{/*en el body de la carta le ponemos de titulo el item.name el cual fue mapeado anteriormente en el array completo */}
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{item.climate || item.gender || item.model}</li>
							<li className="list-group-item">{item.population || item.height || item.manufacturer}</li>
							<li className="list-group-item">
								{item.terrain || item.birth_year || item.cost_in_credits}
							</li>
							{/*aqui creamos los titulos dependiendo de donde fueron redireccionados 1eros son de planets 2do son de characters y 3ros son de vehiculos, todos separador con or para separarlos*/}
						</ul>
						<div className="card-body2">
							<button className="btn btn-primary" onClick={e => history.push(`/${title}/${item.id}`)}>
								{"Ver detalles"}
							</button>
							{/*aqui creamos un boton primario donde history.push va a redireccionar y poner en la barra espaciadora /${title}/${item.id} entonces si elijo a luke skywalker pondra y redireccionara a esto https://3000-f3531f4b-f20b-43bb-8d65-af36e2874672.ws-us02.gitpod.io/Characters/0 */}
							<a className="">
								<i
									className={"card-link fas fa-heart"}
									onClick={event => {
										alert(`${item.name} se añadio a favoritos`);
										console.log(`${item.name} se añadio a favoritos`);
										actions.AddNewFavorite(item, title);
										//aqui creamos un corazon y cuando le demos click activara la alerta y la action de addnewfavorite pasandole el item y el titulo
									}}
								/>
							</a>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<h2>{title}</h2>
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">{makeColumns()}</div>
		</div>
		//aqui creamos un 2do titulo que es justamente el nombre de los planetas, characters y vehicules y hacemos el flex-row de las cartas
	);
};

Row.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array
};
