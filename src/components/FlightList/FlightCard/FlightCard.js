import React from 'react';
import s from './FlightCard.module.scss';

const FlightCard = (props) => {
	return (
		<div className={s.FlightCardContainer}>
			<div className={s.CardCol}>
				<h2>Flight#: {props.flightNumber ? props.flightNumber : '----'}</h2>
				<p>Parking: {props.parking ? props.parking : '----'}</p>
				<p>Flight Routing: {props.routing ? props.routing : '----'}</p>
				<p>
					Flight Coordinator:{' '}
					{props.flightCoordinator ? props.flightCoordinator : 'Not Scheduled'}
				</p>
			</div>
			<div className={s.Divider}></div>
			<div className={s.CardCol}>
				<h2>STA</h2>
				<p>{props.scheduledTOA ? props.scheduledTOA : '----'}</p>
				<h2>STD</h2>
				<p>{props.scheduledTOD ? props.scheduledTOD : '----'}</p>
			</div>
			<div className={s.Divider}></div>
			<div className={s.CardCol}>
				<h2>ETA</h2>
				<p>{props.estimatedTOA ? props.estimatedTOA : '----'}</p>
				<h2>ETD</h2>
				<p>{props.estimatedTOD ? props.estimatedTOD : '----'}</p>
			</div>
			<div className={s.Divider}></div>
			<div className={s.CardCol}>
				<h2>ATA</h2>
				<p>{props.actualTOA ? props.actualTOA : '----'}</p>
				<h2>ATD</h2>
				<p>{props.actualTOD ? props.actualTOD : '----'}</p>
			</div>
			<div className={s.Divider}></div>
			<div className={(s.CardCol, s.BtnCol)}>
				<button className={s.CompleteBtn}>COMPLETE SERVICE</button>
				<button>MORE INFO</button>
				<button>UPDATE DETAILS</button>
			</div>
		</div>
	);
};

export default FlightCard;
