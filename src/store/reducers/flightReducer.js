import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	// Modal Booleans
	isBookingFlight: false,
	isViewingFlightInfo: false,
	isUpdatingFlightInfo: false,
	idDeletingFlight: false,
	shouldCancelToDetails: false,
	// Loading
	isLoadingFlights: false,
	flightsLoaded: false,
	// SERVER
	isMakingRequest: false,
	hasError: false,
	responseStatus: null,
	errorStatusText: null,
	successStatusText: null,
	// Data
	currFlight: null,
	flightList: [],
};

const flightReducer = (state = initialState, action) => {
	switch (action.type) {
		// ----------------
		// FETCHING
		// ----------------
		case actionTypes.FETCH_FLIGHTS_START:
			return updateObject(state, {
				isLoadingFlights: true,
			});

		case actionTypes.FETCH_FLIGHTS_SUCESS:
			return updateObject(state, {
				isLoadingFlights: false,
				flightsLoaded: true,
				flightList: action.flightList,
				hasError: false,
			});

		case actionTypes.FETCH_FLIGHTS_ERROR:
			return updateObject(state, {
				isLoadingFlights: false,
				hasError: true,
				errorStatusText: action.errorMsg,
				responseStatus: action.ErrorStatus,
			});

		// ----------------
		//   CREATING
		// ----------------
		case actionTypes.TOGGLE_IS_BOOKING_FLIGHT:
			if (!state.isBookingFlight) {
				return updateObject(state, {
					isBookingFlight: true,
				});
			} else {
				return updateObject(state, {
					isBookingFlight: false,
				});
			}

		case actionTypes.CREATE_FLIGHT_START:
			return updateObject(state, {
				isMakingRequest: true,
				hasError: false,
			});

		case actionTypes.CREATE_FLIGHT_SUCCESS:
			return updateObject(state, {
				isMakingRequest: false,
				isBookingFlight: false,
				hasError: false,
				serverStatus: action.status,
				successStatusText: action.successMsg,
			});

		case actionTypes.CREATE_FLIGHT_ERROR:
			return updateObject(state, {
				isMakingRequest: false,
				serverStatus: action.status,
				errorStatusText: action.errorMsg,
				hasError: true,
				isAddingFlight: false,
			});

		// ----------------
		//  DELETING
		// ----------------

		case actionTypes.TOGGLE_IS_DELETING_FLIGHT:
			if (!state.isDeletingFlight) {
				return updateObject(state, {
					isDeletingFlight: true,
				});
			} else {
				return updateObject(state, {
					isDeletingFlight: false,
				});
			}

		case actionTypes.DELETE_FLIGHT_START:
			return updateObject(state, {
				isMakingRequest: true,
			});

		case actionTypes.DELETE_FLIGHT_SUCCESS:
			return updateObject(state, {
				isMakingRequest: false,
				isDeletingFlight: false,
				isViewingFlightInfo: false,
				serverStatus: action.status,
				successStatusText: action.successMsg,
				currFlight: null,
			});

		case actionTypes.DELETE_FLIGHT_ERROR:
			return updateObject(state, {
				hasError: true,
				isMakingRequest: false,
				isDeletingFlight: false,
				serverStatus: action.status,
				errorStatusText: action.errorMsg,
			});

		// ----------------
		//  UPDATING
		// ----------------

		case actionTypes.TOGGLE_IS_UPDATING_FLIGHT_FROM_LIST:
			if (!state.isUpdatingFlightInfo) {
				return updateObject(state, {
					isUpdatingFlightInfo: true,
					currFlight: action.flight,
				});
			} else {
				return updateObject(state, {
					isUpdatingFlightInfo: false,
					currFlight: null,
				});
			}

		case actionTypes.TOGGLE_IS_UPDATING_FLIGHT_FROM_DETAILS:
			if (!state.isUpdatingFlightInfo) {
				return updateObject(state, {
					isUpdatingFlightInfo: true,
					shouldCancelToDetails: true,
					isViewingFlightInfo: false,
					currFlight: action.flight,
				});
			} else {
				return updateObject(state, {
					isUpdatingFlightInfo: false,
					shouldCancelToDetails: false,
					isViewingFlightInfo: true,
					currFlight: action.flight,
				});
			}

		case actionTypes.UPDATE_FLIGHT_START:
			return updateObject(state, {
				isMakingRequest: true,
			});

		case actionTypes.UPDATE_FLIGHT_SUCCESS:
			return updateObject(state, {
				isMakingRequest: false,
				isUpdatingFlightInfo: false,
				currFlight: null,
				serverStatus: action.status,
				successStatusText: action.successMsg,
			});

		case actionTypes.UPDATE_FLIGHT_ERROR:
			return updateObject(state, {
				hasError: true,
				isMakingRequest: false,
				isUpdatingFlightInfo: false,
				serverStatus: action.status,
				errorStatusText: action.errorMsg,
			});

		// ----------------
		//   DETAILS
		// ----------------
		case actionTypes.TOGGLE_FLIGHT_DETAILS:
			if (!state.isViewingFlightInfo) {
				return updateObject(state, {
					isViewingFlightInfo: true,
					currFlight: action.flight,
				});
			} else {
				return updateObject(state, {
					isViewingFlightInfo: false,
					isUpdatingFlightInfo: false,
					currFlight: null,
				});
			}

		default:
			return state;
	}
};

export default flightReducer;
