import React from "react";

class CorruptComponent extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			causeError: false
		}
	}
	render() {
		if( this.state.causeError ) {
			throw "Oh no!";
		}
		return (
			<button key="crash" onClick={ () => this.setState( { causeError: true } ) }>Cause error!</button>
		)
	}
}

export default CorruptComponent;
