import React from "react";

import LyricSelector from "./LyricSelector";
import LyricPortal from "./LyricPortal";

class DashboardWidget extends React.Component {
	constructor( props ) {
		super( props );

		// Remove duplicates
		const lyrics = Array.from( new Set( window.r16lyrics.lyrics ) );

		this.state = {
			lyrics
		}
	}

	componentDidMount() {
		this.selectRandomLyric();
	}

	selectRandomLyric() {
		const lyrics = this.state.lyrics;
		const selectedLyric = lyrics[ Math.floor( Math.random() * lyrics.length) ];
		if( lyrics.length > 1 && selectedLyric === this.state.selectedLyric ) {
			return this.selectRandomLyric();
		}
		this.setState( {
			selectedLyric
		} );
	}

	render() {
		return(
			<div>
				<h1>Test!!</h1>
				<LyricSelector
					selected={ this.state.selectedLyric }
					onSelect={ selectedLyric => this.setState( { selectedLyric } ) }
					lyrics={ this.state.lyrics } />
				<LyricPortal
					onRandom={ this.selectRandomLyric.bind( this ) }
					lyric={ this.state.selectedLyric } />
			</div>
		);
	}
}

export default DashboardWidget;
