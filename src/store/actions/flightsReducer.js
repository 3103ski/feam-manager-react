import * as actionTypes from './actionTypes';
import a from 'axios';

// =====================================
//      FETCHING
// =====================================

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

// =====================================
//      CREATE
// =====================================

export const toggleIsBookingFlight = () => {
	return {
		type: actionTypes.TOGGLE_IS_BOOKING_FLIGHT,
	};
};

export const createFlightInit = (newFlight) => {
	return (dispatch) => {
		dispatch(createFlightStart());
		a.post('http://127.0.0.1:8000/api/flights/', newFlight)
			.then((res) => {
				console.log(res);
				dispatch(createFlightSuccess(res));
				dispatch(fetchFlightsInit());
			})
			.catch((err) => {
				dispatch(createFlightError(err));
				console.log('we threw this: ', err);
			});
	};
};

export const createFlightStart = () => {
	return {
		type: actionTypes.CREATE_FLIGHT_START,
	};
};

export const createFlightSuccess = (response) => {
	return {
		type: actionTypes.CREATE_FLIGHT_SUCCESS,
		status: response.status,
		successMsg: response.statusText,
	};
};

export const createFlightError = (response) => {
	return {
		type: actionTypes.CREATE_FLIGHT_ERROR,
		status: response.status,
		errorMsg: response.statusText,
	};
};

// =====================================
//      UPDATING
// =====================================

export const toggleIsUpdatingFlightFromList = (flight) => {
	return {
		type: actionTypes.TOGGLE_IS_UPDATING_FLIGHT_FROM_LIST,
		flight: flight,
	};
};

export const toggleIsUpdatingFlightFromDetails = (flight) => {
	return {
		type: actionTypes.TOGGLE_IS_UPDATING_FLIGHT_FROM_DETAILS,
		flight: flight,
	};
};

export const updateFlightInit = (updatedFlight, flightID) => {
	let updateURL = `http://127.0.0.1:8000/api/flights/${flightID}/`;
	return (dispatch) => {
		dispatch(updateFlightStart());
		a.put(updateURL, updatedFlight)
			.then((response) => {
				dispatch(updateFlightSuccess(response));
				dispatch(fetchFlightsInit());
			})
			.catch((error) => {
				dispatch(updateFlightError(error));
			});
	};
};

export const updateFlightStart = () => {
	return {
		type: actionTypes.UPDATE_FLIGHT_START,
	};
};

export const updateFlightSuccess = (response) => {
	return {
		type: actionTypes.UPDATE_FLIGHT_SUCCESS,
		status: response.status,
		successMsg: response.statusText,
		updatedFlight: response.data,
	};
};

export const updateFlightError = (response) => {
	return {
		type: actionTypes.UPDATE_FLIGHT_ERROR,
		status: response.status,
		errorMsg: response.statusText,
	};
};

// =====================================
//      MODALS
// =====================================

export const toggleFlightDetails = (flightInfo) => {
	return {
		type: actionTypes.TOGGLE_FLIGHT_DETAILS,
		flight: flightInfo,
	};
};
