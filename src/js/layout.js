import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/H_scrollToTop";

import { Home } from "./views/homeFirstPage";
import { Single } from "./views/singleSecondPage";
import injectContext from "./store/appContext";

import { Navbar } from "./component/A_navbar";
import { Footer } from "./component/F_footer";
import { Row } from "./component/E_Row";
import PropTypes from "prop-types";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/Row">
							<Row />
						</Route>
						<Route exact path="/:type/:index">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
