import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ernesto = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.personajes.map(personaje => {
				return (
					<div key={personaje.id} className="card">
						<div className="card-body">
							<h4>{personaje.name}</h4>
						</div>
						<button className="btn btn-success" onClick={e => history.push(`/ernesto/${personaje.id}`)}>
							{"ver detalles"}
						</button>
					</div>
				);
			})}
		</>
	);
};
