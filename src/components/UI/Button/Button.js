// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
// STYLE
import s from './Button.module.scss';

const Button = (props) => {
	let btnClasses, btnFunction, btnType, flight;

	// ***** =========== *****
	//     BUTTON COLORS
	// ***** =========== *****

	switch (props.specialClass) {
		case 'GreenBtn':
			btnClasses = `${s.Green} ${s.BtnComponent}`;
			break;
		case 'RedBtn':
			btnClasses = `${s.Red} ${s.BtnComponent}`;
			break;
		default:
			btnClasses = `${s.Grey} ${s.BtnComponent}`;
	}

	// ***** =========== *****
	//     BUTTON TYPES
	// ***** =========== *****

	switch (props.btnType) {
		case 'submit':
			btnType = 'submit';
			break;
		default:
			btnType = '';
			break;
	}

	// ***** =========== *****
	//     BUTTON FUNCTIONS
	// ***** =========== *****

	switch (props.btnFunction) {
		// -------------
		//   CLIENTS
		case 'toggleAddClient':
			btnFunction = props.toggleAddClient;
			break;
		case 'toggleClientDetails':
			const client = props.client;
			btnFunction = () => props.toggleClientDetails(client);
			break;
		case 'createClient':
			const formData = props.fd;
			btnFunction = () => props.createClient(formData);
			break;
		case 'toggleIsDeletingClient':
			btnFunction = () => props.toggleIsDeletingClient();
			break;
		case 'toggleIsUpdatingClient':
			btnFunction = () => props.toggleIsUpdatingClient(props.client);
			break;
		case 'deleteClient':
			const clientId = props.currClient.id;
			btnFunction = () => props.deleteClient(clientId);
			break;
		// -----------
		//   FLIGHTS
		case 'toggleAddFlight':
			btnFunction = props.toggleIsBookingFlight;
			break;
		case 'toggleFlightDetails':
			flight = props.flight;
			btnFunction = () => props.toggleFlightDetails(flight);
			break;
		case 'toggleIsUpdatingFlightFromList':
			flight = props.flight;
			btnFunction = () => props.toggleIsUpdatingFlightFromList(flight);
			break;
		// ------------------
		//   APP FUNCTIONS
		case 'modalClose':
			btnFunction = props.toggleModal;
			break;
		default:
			break;
	}

	return (
		<button type={btnType} onClick={btnFunction} className={btnClasses}>
			{props.children}
		</button>
	);
};

const mapStateToProps = (state) => {
	return {
		currClient: state.clients.currClient,
		currFlight: state.flights.currFlight,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// APP FUNCTIONS
		toggleModal: () => dispatch(actions.toggleModal()),
		// FLIGHTS
		toggleIsBookingFlight: () => dispatch(actions.toggleIsBookingFlight()),
		toggleFlightDetails: (flight) =>
			dispatch(actions.toggleFlightDetails(flight)),
		toggleIsUpdatingFlightFromList: (flight) =>
			dispatch(actions.toggleIsUpdatingFlightFromList(flight)),
		// CLIENTS
		toggleAddClient: () => dispatch(actions.toggleIsCreatingClient()),
		toggleIsDeletingClient: () => dispatch(actions.toggleIsDeletingClient()),
		toggleIsUpdatingClient: (currClient) =>
			dispatch(actions.toggleIsUpdatingClient(currClient)),
		createClient: (fd) => dispatch(actions.createClientInit(fd)),
		toggleClientDetails: () => dispatch(actions.toggleClientDetails()),
		deleteClient: (clientId) => dispatch(actions.deleteClientInit(clientId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
