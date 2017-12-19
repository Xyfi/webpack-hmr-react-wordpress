import React from "react";

class LyricSelector extends React.Component {
	renderLyrics() {
		const lyrics = this.props.lyrics;
		return lyrics.map( line => {
			return(
				<option
					key={ line }
					value={ line }>
					{ line }
				</option>
			);
		} );
	}

	onSelect( event ) {
		this.props.onSelect( event.target.value );
	}

	render() {
		return (
			<select
				className="r16_select"
				value={ this.props.selected }
				size="10"
				onChange={ this.onSelect.bind( this ) }>
				{ this.renderLyrics() }
			</select>
		);
	}
}

export default LyricSelector;
