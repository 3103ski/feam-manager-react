// FRAMEWORK / UTILITY
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from './store/actions/index';

// COMPONENETS
import './App.scss';
import Navbar from './components/Nav/StandardNav';

// FORMS
import FlightForm from './forms/BookFlightForm/BookFlightForm';

// Containers
import Today from './containers/TodaysSchedule/Today';
import Flights from './containers/AllFlights/AllFlights';
import Clients from './containers/AllClients/AllClients';
import Staff from './containers/ManageStaff/ManageStaff';

// HOCs
import Layout from './hocs/MainLayout/Layout';
import ViewLayout from './hocs/ViewLayout/ViewLayout';
import Modal from './hocs/Modal/Modal';

class App extends React.Component {
	render() {
		let modalContent;
		if (this.props.isBookingFlight) {
			modalContent = <FlightForm></FlightForm>;
		}

		return (
			<div className='App'>
				<Helmet>
					<link
						href='https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
						rel='stylesheet'
					/>
				</Helmet>
				<Layout>
					<Modal showModal={this.props.showModal}>{modalContent}</Modal>
					<Navbar></Navbar>
					<ViewLayout>
						<Route path='/today' component={Today}></Route>
						<Route path='/flights' component={Flights}></Route>
						<Route path='/clients' component={Clients}></Route>
						<Route path='/staff' component={Staff}></Route>
					</ViewLayout>
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isBookingFlight: state.app.isBookingFlight,
		showModal: state.app.modal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
