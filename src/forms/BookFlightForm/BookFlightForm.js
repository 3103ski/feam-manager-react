// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// STYLES
import s from './BookFlightForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
// LOCAL COMPONENTS
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
// THIRD PARTY COMPONENTS
import DatePicker from 'react-datepicker';

class BookFlightForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// DATE / TIME FIELDS
			scheduledTOA: this.props.isUpdatingFlight
				? new Date(this.props.currFlight.scheduledTOA)
				: new Date(),
			scheduledTOD: this.props.isUpdatingFlight
				? new Date(this.props.currFlight.scheduledTOD)
				: new Date(),
			estimatedTOA:
				this.props.isUpdatingFlight &&
				this.props.currFlight.estimatedTOA !== null
					? new Date(this.props.currFlight.estimatedTOA)
					: null,
			estimatedTOD:
				this.props.isUpdatingFlight &&
				this.props.currFlight.estimatedTOD !== null
					? new Date(this.props.currFlight.estimatedTOD)
					: null,
			actualTOA:
				this.props.isUpdatingFlight && this.props.currFlight.actualTOA !== null
					? new Date(this.props.currFlight.actualTOA)
					: null,
			actualTOD:
				this.props.isUpdatingFlight && this.props.currFlight.actualTOD !== null
					? new Date(this.props.currFlight.actualTOD)
					: null,
			serviceDuration: this.props.isUpdatingFlight
				? this.props.currFlight.serviceDuration
				: '',
			// CLIENT / STAFF OBJECTS
			client: this.props.isUpdatingFlight ? this.props.currFlight.client : null,
			lavService: this.props.isUpdatingFlight
				? this.props.currFlight.lavService
				: null,
			createdBy: this.props.isUpdatingFlight
				? this.props.currFlight.createdBy
				: null,
			flightCoordinator: this.props.isUpdatingFlight
				? this.props.currFlight.flightCoordinator
				: null,
			traffiCoordinator: this.props.isUpdatingFlight
				? this.props.currFlight.traffiCoordinator
				: null,
			// DETAILS
			flightNumber: this.props.isUpdatingFlight
				? this.props.currFlight.flightNumber
				: '',
			parking: this.props.isUpdatingFlight ? this.props.currFlight.parking : '',
			routing: this.props.isUpdatingFlight ? this.props.currFlight.routing : '',
			remarks: this.props.isUpdatingFlight ? this.props.currFlight.remarks : '',
			tailNumber: this.props.isUpdatingFlight
				? this.props.currFlight.tailNumber
				: '',
		};
	}

	//----------------------
	// DETAILS
	//----------------------
	handleFlightNumberChange = (event) => {
		this.setState({
			flightNumber: event.target.value,
		});
	};

	handleParkingChange = (event) => {
		this.setState({
			parking: event.target.value,
		});
	};

	handleRoutingChange = (event) => {
		this.setState({
			routing: event.target.value,
		});
	};

	handleRemarksChange = (event) => {
		this.setState({
			remarks: event.target.value,
		});
	};

	handleServiceDurationOnChange = (event) => {
		this.setState({
			serviceDuration: event.target.value,
		});
	};

	handleTailNumberOnChange = (event) => {
		this.setState({
			tailNumber: event.target.value,
		});
	};

	//----------------------
	// DATE-TIME HANDLERS
	//----------------------

	handleDateChange = (date) => {
		this.setState({
			flightDate: date,
		});
	};

	handleScheduledTOA = (date) => {
		this.setState({
			scheduledTOA: date,
		});
	};
	handleScheduledTOD = (date) => {
		this.setState({
			scheduledTOD: date,
		});
	};
	handleEstimatedTOA = (date) => {
		this.setState({
			estimatedTOA: date,
		});
	};
	handleEstimatedTOD = (date) => {
		this.setState({
			estimatedTOD: date,
		});
	};
	handleActualTOA = (date) => {
		this.setState({
			actualTOA: date,
		});
	};
	handleActualTOD = (date) => {
		this.setState({
			actualTOD: date,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const data = this.state;
		if (this.props.isUpdatingFlight) {
			const id = this.props.currFlight.id;
			this.props.putFlight(data, id);
		} else {
			this.props.postFlight(data);
		}
	};

	render() {
		let updateTimeInputs = this.props.isUpdatingFlight ? (
			<div>
				<p>Select An ESTIMATED TIME OF ARRIVAL </p>
				<DatePicker
					selected={this.state.estimatedTOA}
					onChange={this.handleEstimatedTOA}
					showTimeSelect
					dateFormat='yyyy-MM-dd hh:mm'
					// palceholderText='Select Scheduled Time Of Arrival'
				/>
				<p>Select an ESTIMATED TIME OF DEPARTURE</p>
				<DatePicker
					selected={this.state.estimatedTOD}
					onChange={this.handleEstimatedTOD}
					showTimeSelect
					dateFormat='yyyy-MM-dd hh:mm'
				/>
				<p>Select the ACTUAL TIME OF ARRIVAL</p>
				<DatePicker
					selected={this.state.actualTOA}
					onChange={this.handleActualTOA}
					showTimeSelect
					dateFormat='yyyy-MM-dd hh:mm'
					// palceholderText='Select Scheduled Time Of Arrival'
				/>
				<p>Select the ACTUAL TIME OF DEPARTURE</p>
				<DatePicker
					selected={this.state.actualTOD}
					onChange={this.handleActualTOD}
					showTimeSelect
					dateFormat='yyyy-MM-dd hh:mm'
				/>
			</div>
		) : null;

		let cancelBtnFunction;
		if (this.props.isViewingFlightInfo && !this.props.isBookingFlight) {
			cancelBtnFunction = 'toggleFlightDetails';
		} else if (this.props.isBookingFlight && !this.props.isViewingFlightInfo) {
			cancelBtnFunction = 'toggleIsBookingFlight';
		} else if (this.props.shouldCancelToDetails) {
			cancelBtnFunction = 'toggleIsUpdatingFlightFromDetails';
		} else if (!this.props.shouldCancelToDetails) {
			cancelBtnFunction = 'toggleIsUpdatingFlightFromList';
		}

		return (
			<form onSubmit={this.handleFormSubmit} className='form'>
				<Input
					inputPlaceholder='Flight #'
					inputType='text'
					inputName='flightNumber'
					inputValue={this.state.flightNumber}
					inputOnChange={this.handleFlightNumberChange}></Input>
				<Input
					inputPlaceholder='Tail #'
					inputType='text'
					inputName='tailNumber'
					inputValue={this.state.tailNumber}
					inputOnChange={this.handleTailNumberOnChange}></Input>
				<Input
					inputPlaceholder='Parking Lot'
					inputType='text'
					inputName='parkingLot'
					inputValue={this.state.parking}
					inputOnChange={this.handleParkingChange}></Input>
				<Input
					inputPlaceholder='Routing'
					inputType='text'
					inputName='routing'
					inputValue={this.state.routing}
					inputOnChange={this.handleRoutingChange}></Input>
				<Input
					inputPlaceholder='Service Duration'
					inputType='text'
					inputName='serviceDuration'
					inputValue={this.state.serviceDuration}
					inputOnChange={this.handleServiceDurationOnChange}></Input>
				<Input
					inputPlaceholder='Remarks'
					inputName='remarks'
					inputValue={this.state.remarks}
					inputOnChange={this.handleRemarksChange}
					inputType='text'
					inputTag='textArea'></Input>
				<p>Select SCHEDULED TIME OF ARRIVAL</p>
				<DatePicker
					selected={this.state.scheduledTOA}
					onChange={this.handleScheduledTOA}
					showTimeSelect
					dateFormat='yyyy-MM-dd hh:mm'
					// palceholderText='Select Scheduled Time Of Arrival'
				/>
				<p>Select SCHEDULED TIME OF DEPARTURE</p>
				<DatePicker
					selected={this.state.scheduledTOD}
					onChange={this.handleScheduledTOD}
					showTimeSelect
					dateFormat='yyyy-MM-dd hh:mm'
				/>
				{updateTimeInputs}
				<div className={s.ButtonRow}>
					<Button btnFunction={cancelBtnFunction}>CANCEL</Button>
					<Button btnType='submit' specialClass='GreenBtn'>
						{this.props.isUpdatingFlight ? 'UPDATE FLIGHT' : 'BOOK FLIGHT'}
					</Button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currFlight: state.flights.currFlight,
		isUpdatingFlight: state.flights.isUpdatingFlightInfo,
		isViewingFlightInfo: state.flights.isViewingFlightInfo,
		isBookingFlight: state.flights.isBookingFlight,
		shouldCancelToDetails: state.flights.shouldCancelToDetails,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		postFlight: (flight) => dispatch(actions.createFlightInit(flight)),
		putFlight: (data, id) => dispatch(actions.updateFlightInit(data, id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookFlightForm);
