import React, { useEffect, useState } from 'react';
// import s from './FlightList.module.scss';

// Components
import Flight from './FlightCard/FlightCard';

function loadFlights(callback) {
	const xhr = new XMLHttpRequest();
	const method = 'GET';
	const url = 'http://127.0.0.1:8000/api/flights/';
	const responseType = 'json';

	xhr.responseType = responseType;
	xhr.open(method, url);
	xhr.onload = function () {
		callback(xhr.response, xhr.status);
	};
	xhr.onerror = function () {
		callback(
			{ message: 'There was an error retrieving flights from the database.' },
			400
		);
	};
	xhr.send();
}

const FlightList = (props) => {
	const [flights, setFlights] = useState([]);
	useEffect(() => {
		const flightCallback = (response, status) => {
			if (status === 200) {
				setFlights(response);
			} else if (status === 400) {
				console.log(response, `\nStatus: ${status}`);
			}
		};
		loadFlights(flightCallback);
	}, []);

	return (
		<div>
			{flights.map((flight, index) => {
				return (
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
				);
			})}
		</div>
	);
};

export default FlightList;
