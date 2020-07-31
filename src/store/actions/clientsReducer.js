import * as actionTypes from './actionTypes';
import a from 'axios';

// =====================================
//      FETCHING
// =====================================

export const fetchClientsInit = () => {
	return (dispatch) => {
		dispatch(fetchClientsStart());
		a.get('http://127.0.0.1:8000/api/clients/')
			.then((response) => {
				dispatch(fetchClientsSuccess(response));
			})
			.catch((err) => {
				// const [status, msg] = [err.response.status, err.response.statusText];
				// dispatch(fetchClientsError(status, msg));
			});
	};
};

export const fetchClientsStart = () => {
	return {
		type: actionTypes.FETCH_CLIENTS_START,
	};
};

export const fetchClientsSuccess = (response) => {
	return {
		type: actionTypes.FETCH_CLIENTS_SUCCESS,
		clients: response.data,
		status: response.status,
		successMsg: response.statusText,
	};
};

export const fetchClientsError = (response) => {
	return {
		type: actionTypes.FETCH_CLIENTS_ERROR,
		status: response.status,
		errorMsg: response.statusText,
	};
};

// =====================================
//      CREATING
// =====================================

export const toggleIsCreatingClient = () => {
	return {
		type: actionTypes.TOGGLE_IS_CREATING_CLIENT,
	};
};

export const createClientInit = (newClientData) => {
	return (dispatch) => {
		dispatch(createClientStart());
		a.post('http://127.0.0.1:8000/api/clients/', newClientData)
			.then((res) => {
				dispatch(createClientSuccess(res));
				dispatch(fetchClientsInit());
			})
			.catch((error) => {
				dispatch(createClientError(error));
			});
	};
};

export const createClientStart = () => {
	return {
		type: actionTypes.CREATE_CLIENT_START,
	};
};

export const createClientSuccess = (response) => {
	return {
		type: actionTypes.CREATE_CLIENT_SUCCESS,
		status: response.status,
		successMsg: response.statusText,
	};
};

export const createClientError = (error) => {
	return {
		type: actionTypes.CREATE_CLIENT_ERROR,
		status: error.status,
		errorMsg: error.statusText,
	};
};

// =====================================
//      UPDATING
// =====================================

export const toggleIsUpdatingClient = (client) => {
	return {
		type: actionTypes.TOGGLE_IS_UPDATING_CLIENT,
		client: client,
	};
};

export const updateClientInit = (updatedClient, clientID) => {
	let updateURL = `http://127.0.0.1:8000/api/clients/${clientID}/`;
	return (dispatch) => {
		dispatch(updateClientStart());
		a.put(updateURL, updatedClient)
			.then((response) => {
				dispatch(updateClientSuccess(response));
				dispatch(fetchClientsInit());
			})
			.catch((error) => {
				dispatch(updateClientError(error));
			});
	};
};

export const updateClientStart = () => {
	return {
		type: actionTypes.UPDATE_CLIENT_START,
	};
};

export const updateClientSuccess = (response) => {
	return {
		type: actionTypes.UPDATE_CLIENT_SUCCESS,
		status: response.status,
		successMsg: response.statusText,
		updatedClient: response.data,
	};
};

export const updateClientError = (response) => {
	return {
		type: actionTypes.UPDATE_CLIENT_ERROR,
		status: response.status,
		errorMsg: response.statusText,
	};
};

// =====================================
//      DELETING
// =====================================

export const toggleIsDeletingClient = () => {
	return {
		type: actionTypes.TOGGLE_IS_DELETING_CLIENT,
	};
};

export const deleteClientInit = (clientId) => {
	let deleteURL = `http://127.0.0.1:8000/api/clients/${clientId}`;
	return (dispatch) => {
		dispatch(deleteClientStart());
		a.delete(deleteURL)
			.then((res) => {
				dispatch(deleteClientSuccess(res));
				dispatch(fetchClientsInit());
			})
			.catch((err) => {
				dispatch(deleteClientError(err));
			});
	};
};

export const deleteClientStart = () => {
	return {
		type: actionTypes.DELETE_CLIENT_START,
	};
};

export const deleteClientSuccess = (response) => {
	return {
		type: actionTypes.DELETE_CLIENT_SUCCESS,
		status: response.status,
		errorMsg: response.statusText,
	};
};

export const deleteClientError = (response) => {
	return {
		type: actionTypes.DELETE_CLIENT_ERROR,
		status: response.status,
		errorMsg: response.statusText,
	};
};

// =====================================
//      DETAILS
// =====================================

export const toggleClientDetails = (clientInfo) => {
	return {
		type: actionTypes.TOGGLE_CLIENT_DETAILS,
		client: clientInfo,
	};
};
