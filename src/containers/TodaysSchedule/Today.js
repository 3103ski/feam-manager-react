// Utility / Framework
import React from 'react';
// Styles
import s from './Today.module.scss';
// Components
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import FlightList from '../../components/Lists/FlightList/FlightList';
// assets
import iconCalendar from '../../assets/icon_calendar.png';

const Today = (props) => {
	return (
		<div className={s.TodayContainer}>
			<div className={s.FlightsCol}>
				<DashboardCard icon={iconCalendar} cardTitle='Wednesday - July 1, 2020'>
					<FlightList></FlightList>
				</DashboardCard>
			</div>
			<div className={s.StaffCol}>
				<DashboardCard cardTitle='Operations'></DashboardCard>
				<DashboardCard cardTitle='Ramp Crew'></DashboardCard>
			</div>
		</div>
	);
};

export default Today;
