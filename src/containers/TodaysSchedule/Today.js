// Utility / Framework
import React from 'react';
// Styles
import s from './Today.module.scss';
// Components
import ListCard from '../../components/ListCard/ListCard';
import FlightList from '../../components/FlightList/FlightList';
// assets
import iconCalendar from '../../assets/icon_calendar.png';

const Today = (props) => {
	return (
		<div className={s.TodayContainer}>
			<div className={s.FlightsCol}>
				<ListCard icon={iconCalendar} cardTitle='Wednesday - July 1, 2020'>
					<FlightList></FlightList>
				</ListCard>
			</div>
			<div className={s.StaffCol}>
				<ListCard cardTitle='Operations'></ListCard>
				<ListCard cardTitle='Ramp Crew'></ListCard>
			</div>
		</div>
	);
};

export default Today;
