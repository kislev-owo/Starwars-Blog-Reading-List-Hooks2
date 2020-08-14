import React, { useState, useEffect, useContext } from "react";
import { Link, Switch, Route, useLocation, useRouteMatch } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
	//console.log(`this is match: ${match.path}`);
	return (
		<>
			<div className="container">
				<Switch>
					<Route exact path="/demo">
						<>
							<ul className="list-group">
								{store.demo.map((item, index) => {
									return (
										<li
											key={index}
											className="list-group-item d-flex justify-content-between"
											style={{ background: item.background }}>
											<Link to={"/single/" + index}>
												<span>Link to: {item.title}</span>
											</Link>
											{// Conditional render example
											// Check to see if the background is orange, if so, display the message
											item.background === "orange" ? (
												<p style={{ color: item.initial }}>
													Check store/flux.js scroll to the actions to see the code
												</p>
											) : null}
											<button
												className="btn btn-success"
												onClick={() => {
													if (item.background != "white") {
														actions.changeColor(index, "white");
													} else {
														actions.changeColor(index, "green");
													}
												}}>
												Change Color
											</button>
										</li>
									);
								})}
							</ul>
							<br />
							<Link to="/">
								<button className="btn btn-primary">Back home</button>
							</Link>
						</>
					</Route>
					<Route path={`${match.path}/blue`}>
						<div className="blue-box">AZUL!</div>
					</Route>
					<Route path={`${match.path}/green`}>
						<div className="green-box">VERDE!</div>
					</Route>
				</Switch>
			</div>
		</>
	);
};
