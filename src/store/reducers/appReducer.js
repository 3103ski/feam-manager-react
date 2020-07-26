import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	modal: true,
	isBookingFlight: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_IS_BOOKING_FLIGHT:
			if (state.isBookingFlight === false) {
				return updateObject(state, {
					modal: true,
					isBookingFlight: true,
				});
			} else {
				return updateObject(state, {
					modal: false,
					isBookingFlight: false,
				});
			}
		case actionTypes.MODAL_CLOSE:
			return updateObject(state, {
				modal: false,
				isBookingFlight: false,
			});
		default:
			return state;
	}
};

export default appReducer;
