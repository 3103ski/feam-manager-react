import * as actionTypes from './actionTypes';

export const toggleIsBookingFlight = () => {
	return {
		type: actionTypes.TOGGLE_IS_BOOKING_FLIGHT,
	};
};

export const modalClose = () => {
	return {
		type: actionTypes.MODAL_CLOSE,
	};
};

export const showMoreFlightInfo = (flightInfo) => {
	return {
		type: actionTypes.SHOW_MORE_FLIGHT_INFO,
		flight: flightInfo,
	};
};
