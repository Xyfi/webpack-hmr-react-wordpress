import React from "react";
import ReactDOM from "react-dom";

class LyricPortal extends React.Component {
	render() {
		return ReactDOM.createPortal(
			[
				this.props.lyric,
				<button onClick={ this.props.onRandom } key="r16_button">Random</button>
			],
			document.getElementById( "r16_portal" )
		)
	}
}

export default LyricPortal;
