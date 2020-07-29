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
	console.log(response);
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

export const createClientInit = (formContent) => {
	return (dispatch) => {
		dispatch(createClientStart());
		a.post('http://127.0.0.1:8000/api/clients/', formContent)
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
//      DELETING
// =====================================

export const deleteClientInit = (clientId) => {
	console.log(clientId);
	let deleteURL = `http://127.0.0.1:8000/api/clients/${clientId}`;
	return (dispatch) => {
		dispatch(deleteClientStart());
		a.delete(deleteURL)
			.then((res) => {
				console.log('we deleted successfully: ', res);
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

export const toggleIsDeletingClient = () => {
	return {
		type: actionTypes.TOGGLE_IS_DELETING_CLIENT,
	};
};

// =====================================
//      MODALS
// =====================================
export const toggleIsCreatingClient = () => {
	return {
		type: actionTypes.TOGGLE_IS_CREATING_CLIENT,
	};
};

export const toggleClientDetails = (clientInfo) => {
	return {
		type: actionTypes.TOGGLE_CLIENT_DETAILS,
		client: clientInfo,
	};
};
