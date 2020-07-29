// FRAMEWORK / UTILITY
import React from 'react';
// STYLE
import s from './FlightCard.module.scss';
// COMPONENTS
import Button from '../../../UI/Button/Button';

const FlightCard = (props) => {
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
		props.flightNumber ? props.flightNumber : '----',
		props.parking ? props.parking : '----',
		props.routing ? props.routing : '----',
		props.flightCoordinator ? props.flightCoordinator : 'Not Scheduled',
		props.scheduledTOA ? props.scheduledTOA : '----',
		props.scheduledTOD ? props.scheduledTOD : '----',
		props.estimatedTOA ? props.estimatedTOA : '----',
		props.estimatedTOD ? props.estimatedTOD : '----',
		props.actualTOA ? props.actualTOA : '----',
		props.actualTOD ? props.actualTOD : '----',
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
				<Button flight={props.flight} btnFunction='toggleFlightDetails'>
					MORE INFO
				</Button>
				<Button>UPDATE DETAILS</Button>
			</div>
		</div>
	);
};

export default FlightCard;
