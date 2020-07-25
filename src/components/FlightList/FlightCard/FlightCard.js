import React from 'react';
import s from './FlightCard.module.scss';

const FlightCard = (props) => {
	return (
		<div className={s.FlightCardContainer}>
			<div className={s.CardCol}>
				<h2>Flight#: CI5256</h2>
				<p>Parking: R-12</p>
				<p>Flight Routing: TPE-ANC-ATL-DFW</p>
				<p>Flight Coordinator: Tj</p>
			</div>
			<div className={s.Divider}></div>
			<div className={s.CardCol}>
				<h2>STA</h2>
				<p>0005</p>
				<h2>STD</h2>
				<p>0105</p>
			</div>
			<div className={s.Divider}></div>
			<div className={s.CardCol}>
				<h2>ETA</h2>
				<p>0105</p>
				<h2>ETD</h2>
				<p>0205</p>
			</div>
			<div className={s.Divider}></div>
			<div className={s.CardCol}>
				<h2>ATA</h2>
				<p>0100</p>
				<h2>ATD</h2>
				<p>0205</p>
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
