import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleCard } from "../component/singleCard";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams(); // params.type, params.index
	return (
		<div className="jumbotron">
			{/* <h1 className="display-4">This will show the Single element: {`${props.title}`}</h1> */}

			<hr className="my-4" />

			<div className="mt-3">
				<SingleCard title={params.type} idToRender={params.index} />
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	title: PropTypes.string
};

/*
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[props.match.params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
*/
