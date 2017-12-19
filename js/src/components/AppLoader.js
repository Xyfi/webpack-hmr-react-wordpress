import React from "react";

class AppLoader extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			hidden: false,
			error: false
		}
	}
	componentDidCatch( error, info ) {
		this.setState( { error: true } );
	}
	render() {
		if( this.state.hidden ) {
			return null;
		}
		return (
			<h1 key="heading">Test!!</h1>
		);
	}
}

export default AppLoader;
