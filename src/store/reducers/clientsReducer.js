import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	// Modal Booleans
	isAddingClient: false,
	isViewingClientInfo: false,
	isDeletingClient: false,
	isEditingClient: false,
	// Loading
	isLoadingClients: false,
	clientsLoaded: false,
	// SERVER
	isMakingRequest: false,
	hasError: false,
	responseStatus: null,
	errorStatusText: null,
	successStatusText: null,
	// Data
	currClient: null,
	clientList: [],
};

const clientReducer = (state = initialState, action) => {
	switch (action.type) {
		// ----------------
		// FETCHING
		// ----------------
		case actionTypes.FETCH_CLIENTS_START:
			return updateObject(state, {
				isLoadingClients: true,
			});

		case actionTypes.FETCH_CLIENTS_SUCCESS:
			return updateObject(state, {
				isLoadingClients: false,
				hasError: false,
				clientsLoaded: true,
				clientList: action.clients,
				responseStatus: action.status,
				successStatusText: action.successMsg,
			});

		case actionTypes.FETCH_FLIGHTS_ERROR:
			return updateObject(state, {
				isLoadingFlights: false,
				hasError: true,
				errorMessage: action.errorMsg,
				responseStatus: action.status,
			});

		// ----------------
		//   CREATING
		// ----------------

		case actionTypes.TOGGLE_IS_CREATING_CLIENT:
			if (!state.isAddingClient) {
				return updateObject(state, {
					isAddingClient: true,
				});
			} else {
				return updateObject(state, {
					isAddingClient: false,
				});
			}

		case actionTypes.CREATE_CLIENT_START:
			return updateObject(state, {
				isMakingRequest: true,
				hasError: false,
			});

		case actionTypes.CREATE_CLIENT_SUCCESS:
			return updateObject(state, {
				isMakingRequest: false,
				isAddingClient: false,
				hasError: false,
				serverStatus: action.status,
				successStatusText: action.successMsg,
			});

		case actionTypes.CREATE_CLIENT_ERROR:
			return updateObject(state, {
				isMakingRequest: false,
				serverStatus: action.status,
				errorStatusText: action.errorMsg,
				hasError: true,
				isAddingClient: false,
			});

		// ----------------
		//  UPDATING
		// ----------------

		case actionTypes.TOGGLE_IS_UPDATING_CLIENT:
			if (!state.isEditingClient) {
				return updateObject(state, {
					isEditingClient: true,
					isViewingClientInfo: false,
					currClient: action.client,
				});
			} else {
				return updateObject(state, {
					isEditingClient: false,
					isViewingClientInfo: true,
					currClient: action.client,
				});
			}

		case actionTypes.UPDATE_CLIENT_START:
			return updateObject(state, {
				isMakingRequest: true,
			});

		case actionTypes.UPDATE_CLIENT_SUCCESS:
			return updateObject(state, {
				isMakingRequest: false,
				isViewingClientInfo: true,
				isEditingClient: false,
				serverStatus: action.status,
				successStatusText: action.successMsg,
				currClient: action.updatedClient,
			});

		case actionTypes.UPDATE_CLIENT_ERROR:
			return updateObject(state, {
				hasError: true,
				isMakingRequest: false,
				isEditingClient: false,
				isViewingClientInfo: true,
				serverStatus: action.status,
				errorStatusText: action.errorMsg,
			});

		// ----------------
		//  DELETING
		// ----------------

		case actionTypes.TOGGLE_IS_DELETING_CLIENT:
			if (!state.isDeletingClient) {
				return updateObject(state, {
					isDeletingClient: true,
				});
			} else {
				return updateObject(state, {
					isDeletingClient: false,
				});
			}

		case actionTypes.DELETE_CLIENT_START:
			return updateObject(state, {
				isMakingRequest: true,
			});

		case actionTypes.DELETE_CLIENT_SUCCESS:
			return updateObject(state, {
				isMakingRequest: false,
				isDeletingClient: false,
				isViewingClientInfo: false,
				serverStatus: action.status,
				successStatusText: action.successMsg,
				currClient: null,
			});

		case actionTypes.DELETE_CLIENT_ERROR:
			return updateObject(state, {
				hasError: true,
				isMakingRequest: false,
				isDeletingClient: false,
				serverStatus: action.status,
				errorStatusText: action.errorMsg,
			});

		// ----------------
		//	DETAILS
		// ----------------

		case actionTypes.TOGGLE_CLIENT_DETAILS:
			if (!state.isViewingClientInfo) {
				return updateObject(state, {
					isViewingClientInfo: true,
					currClient: action.client,
				});
			} else {
				return updateObject(state, {
					isViewingClientInfo: false,
					isEditingClient: false,
					currClient: null,
				});
			}
		default:
			return state;
	}
};

export default clientReducer;
