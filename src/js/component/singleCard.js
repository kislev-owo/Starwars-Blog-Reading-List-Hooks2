import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCard = props => {
	const { title, data, type } = props;
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const probando = () => {
		return data.map((item, index) => {
			item.id = index;
			return (
				<>
					<div className="container mt-2">
						<div className="card mb-3">
							<div className="row no-gutters">
								<div className="col-md-4">
									<img src="https://via.placeholder.com/800x600" className="card-img" alt="..." />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">texto de ...</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		});
	};
	return (
		<div className="jumbotron">
			<h1 className="display-4" />
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">{probando()}</div>
		</div>
	);
};

SingleCard.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	type: PropTypes.string
};
