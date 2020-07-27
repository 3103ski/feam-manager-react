// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// COMPONENTS
import Flight from './FlightCard/FlightCard';

class FlightList extends React.Component {
	render() {
		let flights = <h1>LOADING FLIGHTS...</h1>;

		if (!this.props.flightsLoaded) {
			this.props.flightsInit();
		}

		if (!this.props.isLoadingFlights) {
			flights = this.props.flightList ? (
				this.props.flightList.map((flight, index) => (
					<Flight
						key={index}
						flight={flight}
						flightNumber={flight.flightNumber}
						parking={flight.parking}
						routing={flight.routing}
						flightCoordinator={flight.flightCoordinator}
						scheduledTOA={flight.scheduledTOA}
						scheduledTOD={flight.scheduledTOD}
						estimatedTOA={flight.estimatedTOA}
						estimatedTOD={flight.estimatedTOD}
						actualTOA={flight.actualTOA}
						actualTOD={flight.actualTOD}></Flight>
				))
			) : (
				<h1>False Load</h1>
			);
		}
		return <div>{flights}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		flightList: state.flights.flightList,
		flightsLoaded: state.flights.flightsLoaded,
		isLoadingFlights: state.flights.isLoadingFlights,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchFlightsStart: () => dispatch(actions.fetchFlightsStart()),
		fetchFlightSuccess: () => dispatch(actions.fetchFlightsSuccess()),
		fetchFlightError: () => dispatch(actions.fetchFlightsError()),
		flightsInit: () => dispatch(actions.fetchFlightsInit()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
