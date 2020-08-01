// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTime } from '../../../utility/utility';
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
				<div className={s.Schedule}>
					<div className={s.FlightNumberAndDate}>
						<h1>FLIGHT#: {f.flightNumber}</h1>
						<h1>{f.scheduledTOA ? formatDate(f.scheduledTOA) : na}</h1>
					</div>
					<div className={s.Times}>
						<div className={`${s.Scheduled} ${s.Time}`}>
							<Detail label='Scheduled TOA'>
								{f.scheduledTOA ? formatTime(f.scheduledTOA) : nt}
							</Detail>
							<Detail label='Scheduled TOD'>
								{f.scheduledTOD ? formatTime(f.scheduledTOD) : nt}
							</Detail>
						</div>
						<div className={`${s.Estimated} ${s.Time}`}>
							<Detail label='Estimated TOA'>
								{f.estimatedTOA ? formatTime(f.estimatedTOA) : nt}
							</Detail>
							<Detail label='Estimated TOD'>
								{f.estimatedTOD ? formatTime(f.estimatedTOD) : nt}
							</Detail>
						</div>
						<div className={`${s.Actual} ${s.Time}`}>
							<Detail label='Actual TOA'>
								{f.actualTOA ? formatTime(f.actualTOA) : nt}
							</Detail>
							<Detail label='Actual TOD'>
								{f.actualTOD ? formatTime(f.actualTOD) : nt}
							</Detail>
						</div>
					</div>
				</div>
				<div className={s.InfoRow}>
					<div className={s.DetailSection}>
						<h1>Details</h1>
						<div className={s.DetailsContainer}>
							<Detail sideLabel label='Flight Number'>
								{f.flightNumber}
							</Detail>
							<Detail sideLabel label='Parking'>
								{f.parking}
							</Detail>
							<Detail sideLabel label='Routing'>
								{f.routing}
							</Detail>
							<Detail sideLabel label='Tail Number'>
								{f.tailNumber}
							</Detail>
							<Detail sideLabel label='Notes'>
								{f.remarks}
							</Detail>
						</div>
					</div>

					<div className={s.DetailSection}>
						<h1>Staff</h1>
						<div className={s.DetailsContainer}>
							<Detail sideLabel label='FlightCoordinator'>
								{f.flightCoordinator ? f.flightCoordinator : ns}
							</Detail>
							<Detail sideLabel label='Lav Service'>
								{f.lavService ? f.lavService : ns}
							</Detail>
							<Detail sideLabel label='Traffic Coordinator'>
								{f.trafficCoordinator ? f.trafficCoordinator : ns}
							</Detail>
							<Detail sideLabel label='Client'>
								{f.client ? f.client : na}
							</Detail>
							<Detail sideLabel label='Booked By'>
								{f.createdBy ? f.createdBy : na}
							</Detail>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		details = <p>There was an issue retrieving the flight information.</p>;
	}

	return (
		<div className={s.FullInfoContainer}>
			{details}
			<Button
				btnFunction={
					props.isViewingInfo
						? 'toggleFlightDetails'
						: 'toggleIsUpdatingFlightFromDetails'
				}>
				CLOSE DETAILS
			</Button>
			<Button
				specialClass='GreenBtn'
				flight={f}
				btnFunction='toggleIsUpdatingFlightFromDetails'>
				UPDATE DETAILS
			</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currFlight: state.flights.currFlight,
		isViewingInfo: state.flights.isViewingFlightInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FullFlightInfo);
