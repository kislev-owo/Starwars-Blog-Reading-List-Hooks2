import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = props => {
	const { store, actions } = useContext(Context);
	// const params = useParams(); // params.personajeId
	const { personajeId } = useParams(); // personajeId
	return (
		<>
			{store.personajes.map(personaje => {
				if (personaje.id == personajeId) {
					return (
						<div key={personaje.id} className="card">
							<div className="card-body">
								<p>{personaje.name}</p>
								<p>{personaje.last_name}</p>
								<p>{personaje.age}</p>
							</div>
						</div>
					);
				}
			})}
		</>
	);
};
