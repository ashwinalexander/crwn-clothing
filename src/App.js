import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
	<div>
		<h1>hadts</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" component={HomePage} />
				<Route exact path="/shop/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
