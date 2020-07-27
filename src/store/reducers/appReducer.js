import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	modal: false,
	// isBookingFlight: false,
	// isViewingFlightInfo: false,
	// activeFlight: null,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		// case actionTypes.TOGGLE_IS_BOOKING_FLIGHT:
		// 	return updateObject(state, {
		// 		modal: true,
		// 		isBookingFlight: true,
		// 	});
		// case actionTypes.SHOW_MORE_FLIGHT_INFO:
		// 	console.log(action.flight);
		// 	return updateObject(state, {
		// 		modal: true,
		// 		isViewingFlightInfo: true,
		// 		activeFlight: action.flight,
		// });
		case actionTypes.TOGGLE_MODAL:
			if (state.modal === true) {
				return updateObject(state, {
					modal: false,
				});
			} else {
				return updateObject(state, {
					modal: true,
				});
			}
		default:
			return state;
	}
};

export default appReducer;
