// Framework / Utility
import React from 'react';
// Styles
import s from './AllFlights.module.scss';
// Components
import FlightList from '../../components/FlightList/FlightList';
import ListToolbar from '../../components/ListToolbar/ListToolBar';

class AllFlights extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={s.FlightPageWrapper}>
				<div className={s.FlightListCol}>
					<ListToolbar></ListToolbar>
					<FlightList></FlightList>
				</div>
			</div>
		);
	}
}

export default AllFlights;
