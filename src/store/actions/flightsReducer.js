import * as actionTypes from './actionTypes';
import a from 'axios';

// FETCHING FLIGHTS

export const fetchFlightsInit = () => {
	return (dispatch) => {
		const axiosOptions = {
			method: 'get',
			url: 'http://127.0.0.1:8000/api/flights/',
		};
		dispatch(fetchFlightsStart());
		a(axiosOptions)
			.then((res) => {
				const flights = res.data;
				console.log(flights);
				dispatch(fetchFlightsSuccess(flights));
			})
			.catch((err) => {
				const [status, msg] = [err.response.status, err.response.statusText];
				dispatch(fetchFlightsError(status, msg));
			});
	};
};

export const fetchFlightsStart = () => {
	return {
		type: actionTypes.FETCH_FLIGHTS_START,
	};
};

export const fetchFlightsSuccess = (flightList) => {
	return {
		type: actionTypes.FETCH_FLIGHTS_SUCESS,
		flightList: flightList,
	};
};

export const fetchFlightsError = (errorStatus, errorMsg) => {
	return {
		type: actionTypes.FETCH_FLIGHTS_ERROR,
		status: errorStatus,
		errorMsg: errorMsg,
	};
};

// FLIGHT UTILITY

export const toggleIsBookingFlight = () => {
	return {
		type: actionTypes.TOGGLE_IS_BOOKING_FLIGHT,
	};
};

export const toggleFlightDetails = (flightInfo) => {
	return {
		type: actionTypes.TOGGLE_FLIGHT_DETAILS,
		flight: flightInfo,
	};
};

export const resetFlightModalContent = () => {
	return {
		type: actionTypes.RESET_FLIGHT_MODAL_CONTENT,
	};
};
