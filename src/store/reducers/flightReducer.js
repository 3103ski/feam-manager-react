import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	// Modal Booleans
	modal: false,
	isBookingFlight: false,
	isViewingFlightInfo: false,
	// Loading
	isLoadingFlights: false,
	flightsLoaded: false,
	// Error
	hasError: false,
	errorMessage: null,
	errorStatus: null,
	// Data
	activeFlight: null,
	flightList: [],
};

const flightReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_IS_BOOKING_FLIGHT:
			if (!state.isBookingFlight) {
				return updateObject(state, {
					isBookingFlight: true,
					modal: true,
				});
			} else {
				return updateObject(state, {
					isBookingFlight: false,
					modal: false,
				});
			}

		case actionTypes.TOGGLE_FLIGHT_DETAILS:
			if (!state.isViewingFlightInfo) {
				return updateObject(state, {
					isViewingFlightInfo: true,
					modal: true,
					activeFlight: action.flight,
				});
			} else {
				return updateObject(state, {
					isViewingFlightInfo: false,
					activeFlight: null,
					modal: false,
				});
			}

		case actionTypes.FETCH_FLIGHTS_START:
			return updateObject(state, {
				isLoadingFlights: true,
			});

		case actionTypes.FETCH_FLIGHTS_SUCESS:
			return updateObject(state, {
				isLoadingFlights: false,
				flightsLoaded: true,
				flightList: action.flightList,
			});

		case actionTypes.FETCH_FLIGHTS_ERROR:
			return updateObject(state, {
				isLoadingFlights: false,
				hasError: true,
				errorMessage: action.errorMsg,
				errorStatus: action.ErrorStatus,
			});
		default:
			return state;
	}
};

export default flightReducer;
