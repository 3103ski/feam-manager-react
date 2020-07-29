// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
// STYLE
import s from './Button.module.scss';

const Button = (props) => {
	let btnClasses, btnFunction, btnType;

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

	switch (props.btnFunction) {
		case 'toggleAddFlight':
			btnFunction = props.toggleIsBookingFlight;
			break;
		case 'toggleAddClient':
			btnFunction = props.toggleAddClient;
			break;
		case 'toggleFlightDetails':
			const flight = props.flight;
			btnFunction = () => props.toggleFlightDetails(flight);
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
		case 'deleteClient':
			const clientId = props.currClient.id;
			btnFunction = () => props.deleteClient(clientId);
			break;
		case 'modalClose':
			btnFunction = props.toggleModal;
			break;
		default:
			break;
	}

	switch (props.btnType) {
		case 'submit':
			btnType = 'submit';
			break;
		default:
			btnType = '';
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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleIsBookingFlight: () => dispatch(actions.toggleIsBookingFlight()),
		toggleAddClient: () => dispatch(actions.toggleIsCreatingClient()),
		toggleModal: () => dispatch(actions.toggleModal()),
		toggleFlightDetails: (flight) =>
			dispatch(actions.toggleFlightDetails(flight)),
		toggleClientDetails: () => dispatch(actions.toggleClientDetails()),
		createClient: (fd) => dispatch(actions.createClientInit(fd)),
		deleteClient: (clientId) => dispatch(actions.deleteClientInit(clientId)),
		toggleIsDeletingClient: () => dispatch(actions.toggleIsDeletingClient()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
