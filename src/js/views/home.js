import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Ernesto } from "./Ernesto";

export const Home = () => {
	const [newTask, setNewTask] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<div className="container ">
			<div className="mt-5">
				<Ernesto title="Planets" data={store.planets} type="planets" />
			</div>
			<div className="mt-5">
				<Ernesto title="Characters" data={store.characters} type="characters" />
			</div>
		</div>
	);
};

/*


import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const [newTask, setNewTask] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				onChange={e => setNewTask(e.target.value)}
				value={newTask}
				onKeyPress={e => {
					if (e.key == "Enter") {
						actions.addTask(newTask);
						setNewTask("");
					}
				}}
			/>
			<ul>
				{store.todos.map((task, index) => {
					return (
						<li key={index} onClick={e => actions.removeTask(index)}>
							{task}
						</li>
					);
				})}
			</ul>
			<div className="row justify-content-center">
				<button className="btn btn-primary mx-2" onClick={e => history.push("/demo/blue")}>
					{"go to demo"}
				</button>
				<button className="btn btn-secondary mx-2" onClick={e => history.push("/demo")}>
					{"go to demo"}
				</button>
				<button className="btn btn-success mx-2" onClick={e => history.push("/demo/green")}>
					{"go to demo"}
				</button>
			</div>
		</div>
	);
};
*/
