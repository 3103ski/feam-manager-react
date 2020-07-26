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
