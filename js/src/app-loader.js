import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import AppLoader from "./components/AppLoader";

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('react-16-app-loader'),
	)
};

render( AppLoader );

// Webpack Hot Module Replacement API
if ( module.hot ) {
	module.hot.accept( './components/AppLoader', () => { render( AppLoader ) } )
}
