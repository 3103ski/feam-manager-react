// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
// STYLE
import s from './FullFlightInfo.module.scss';
// COMPONENTS
import Button from '../../UI/Button/Button';
import Detail from '../../UI/LabeledDetail/LabeledDetail';

const FullFlightInfo = (props) => {
	let details;
	const ns = 'Not Scheduled';
	const nt = 'Not Time Selected';
	const na = 'Detail Not Available';
	const f = props.currFlight ? props.currFlight : null;
	if (f != null) {
		details = (
			<div className={s.DetailsContainer}>
				<div className={s.DetailSection}>
					<h1>Details</h1>
					<Detail label='Flight Number'>{f.flightNumber}</Detail>
					<Detail label='Parking'>{f.parking}</Detail>
					<Detail label='Routing'>{f.routing}</Detail>
					<Detail label='Tail Number'>{f.tailNumber}</Detail>
				</div>

				<div className={s.DetailSection}>
					<h1>Staff</h1>
					<Detail label='FlightCoordinator'>
						{f.flightCoordinator ? f.flightCoordinator : ns}
					</Detail>
					<Detail label='Lav Service'>
						{f.lavService ? f.lavService : ns}
					</Detail>
					<Detail label='Traffic Coordinator'>
						{f.trafficCoordinator ? f.trafficCoordinator : ns}
					</Detail>
					<Detail label='Client'>{f.client ? f.client : na}</Detail>
					<Detail label='Booked By'>{f.createdBy ? f.createdBy : na}</Detail>
				</div>

				<div className={s.DetailSection}>
					<h1>Schedule</h1>
					<Detail label='Date'>{f.flightDate ? f.flightDate : na}</Detail>
					<Detail label='Scheduled TOA'>
						{f.scheduledTOA ? f.scheduledTOA : nt}
					</Detail>
					<Detail label='Scheduled TOD'>
						{f.scheduledTOD ? f.scheduledTOD : nt}
					</Detail>
					<Detail label='Estimated TOA'>
						{f.estimatedTOA ? f.estimatedTOA : nt}
					</Detail>
					<Detail label='Estimated TOD'>
						{f.estimatedTOD ? f.estimatedTOD : nt}
					</Detail>
					<Detail label='Actual TOA'>{f.actualTOA ? f.actualTOA : nt}</Detail>
					<Detail label='Actual TOD'>{f.actualTOD ? f.actualTOD : nt}</Detail>
				</div>
			</div>
		);
	} else {
		details = <p>There was an issue retrieving the flight information.</p>;
	}

	return (
		<div className={s.FullInfoContainer}>
			{details}
			<Button btnFunction='toggleFlightDetails'>CLOSE DETAILS</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currFlight: state.flights.currFlight,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FullFlightInfo);
