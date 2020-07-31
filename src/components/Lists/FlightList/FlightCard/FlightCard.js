// FRAMEWORK / UTILITY
import React from 'react';
import { formatTime } from '../../../../utility/utility';
// STYLE
import s from './FlightCard.module.scss';
// COMPONENTS
import Button from '../../../UI/Button/Button';

class FlightCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flightInfo: this.props.currFlight ? this.props.currFlight : null,
		};
	}
	render() {
		let [
			flightNumber,
			parking,
			routing,
			flightCoordinator,
			scheduledTOA,
			scheduledTOD,
			estimatedTOA,
			estimatedTOD,
			actualTOA,
			actualTOD,
		] = [
			this.props.flightNumber ? this.props.flightNumber : '----',
			this.props.parking ? this.props.parking : '----',
			this.props.routing ? this.props.routing : '----',
			this.props.flightCoordinator
				? this.props.flightCoordinator
				: 'Not Scheduled',
			this.props.scheduledTOA ? formatTime(this.props.scheduledTOA) : '----',
			this.props.scheduledTOD ? formatTime(this.props.scheduledTOD) : '----',
			this.props.estimatedTOA ? formatTime(this.props.estimatedTOA) : '----',
			this.props.estimatedTOD ? formatTime(this.props.estimatedTOD) : '----',
			this.props.actualTOA ? formatTime(this.props.actualTOA) : '----',
			this.props.actualTOD ? formatTime(this.props.actualTOD) : '----',
		];
		return (
			<div className={s.FlightCardContainer}>
				<div className={s.CardCol}>
					<h2>Flight#: {flightNumber}</h2>
					<p>Parking: {parking}</p>
					<p>Flight Routing: {routing}</p>
					<p>
						Flight Coordinator:
						{flightCoordinator}
					</p>
				</div>
				<div className={s.Divider}></div>
				<div className={s.CardCol}>
					<h2>STA</h2>
					<p>{scheduledTOA}</p>
					<h2>STD</h2>
					<p>{scheduledTOD}</p>
				</div>
				<div className={s.Divider}></div>
				<div className={s.CardCol}>
					<h2>ETA</h2>
					<p>{estimatedTOA}</p>
					<h2>ETD</h2>
					<p>{estimatedTOD}</p>
				</div>
				<div className={s.Divider}></div>
				<div className={s.CardCol}>
					<h2>ATA</h2>
					<p>{actualTOA}</p>
					<h2>ATD</h2>
					<p>{actualTOD}</p>
				</div>
				<div className={s.Divider}></div>
				<div className={(s.CardCol, s.BtnCol)}>
					<Button specialClass='GreenBtn'>COMPLETE SERVICE</Button>
					<Button flight={this.props.flight} btnFunction='toggleFlightDetails'>
						MORE INFO
					</Button>
					<Button
						flight={this.props.flight}
						btnFunction='toggleIsUpdatingFlightFromList'>
						UPDATE DETAILS
					</Button>
				</div>
			</div>
		);
	}
}

export default FlightCard;
