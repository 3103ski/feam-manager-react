// Utility / Framework
import React from 'react';
// Styles
import s from './DashboardCard.module.scss';

const FlightList = (props) => {
	return (
		<div className={s.ListContainer}>
			<div className={s.TitleContainer}>
				{props.icon ? <img src={props.icon} alt='calendarIcon' /> : null}
				<h1>{props.cardTitle}</h1>
			</div>
			<div className={s.Divider} />
			<div className={s.ListWrapper}>{props.children}</div>
		</div>
	);
};

export default FlightList;
