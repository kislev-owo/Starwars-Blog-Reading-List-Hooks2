import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Row } from "../component/E_Row";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container ">
			<div className="mt-4">
				<Row title="Planets" data={store.planets} />
			</div>
			<div className="mt-4">
				<Row title="Characters" data={store.characters} />
			</div>
			<div className="mt-4">
				<Row title="Vehicles" data={store.vehicles} />
			</div>
		</div>
	);
};

// en la primera pagina renderizamos todo lo q esta en ella y aparte le damos valores a sus propiedades como titulo = planetas y data store su funcion es como vista donde se añaden los componentes utilizados
