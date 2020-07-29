// Framework / Utility
import React from 'react';
// Components
import FlightList from '../../components/Lists/FlightList/FlightList';
// HOCs
import FullListLayout from '../../hocs/FullListLayout/FullListLayout';

class AllFlights extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<FullListLayout listType='flights'>
				<FlightList></FlightList>
			</FullListLayout>
		);
	}
}

export default AllFlights;
