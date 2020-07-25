import React from 'react';
// import s from './FlightList.module.scss';

// Components
import Flight from './FlightCard/FlightCard';

class FlightList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flightsAreLoaded: false,
		};
	}
	render() {
		return (
			<div>
				<Flight></Flight>
				<Flight></Flight>
				<Flight></Flight>
			</div>
		);
	}
}

export default FlightList;
