// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
// STYLE
import s from './Button.module.scss';

const Button = (props) => {
	let btnClasses, btnFunction;

	switch (props.specialClass) {
		case 'GreenBtn':
			btnClasses = `${s.Green} ${s.BtnComponent}`;
			break;
		default:
			btnClasses = `${s.Grey} ${s.BtnComponent}`;
	}

	switch (props.btnFunction) {
		case 'toggleAddFlight':
			btnFunction = props.toggleIsBookingFlight;
			break;
		case 'toggleFlightDetails':
			btnFunction = () => props.toggleFlightDetails(props.flight);
			break;
		case 'modalClose':
			btnFunction = props.toggleModal;
			break;
		default:
			break;
	}

	return (
		<button onClick={btnFunction} className={btnClasses}>
			{props.children}
		</button>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleIsBookingFlight: () => dispatch(actions.toggleIsBookingFlight()),
		toggleModal: () => dispatch(actions.toggleModal()),
		toggleFlightDetails: (flight) =>
			dispatch(actions.toggleFlightDetails(flight)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
