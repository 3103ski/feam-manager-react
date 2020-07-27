// FRAMEWORK / UTILITY
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from './store/actions/index';

// COMPONENETS
import './App.scss';
import Navbar from './components/Nav/StandardNav';
import ModalCard from './components/UI/Modal/ModalCard/ModalCard';
import FullFlightInfo from './components/Content/FullFlightInfo/FullFlightInfo';

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
import Modal from './components/UI/Modal/Modal';

class App extends React.Component {
	render() {
		let modalContent;

		const isModal =
			this.props.appModal || this.props.flightModal ? true : false;

		if (this.props.isBookingFlight) {
			modalContent = <FlightForm></FlightForm>;
		}

		if (this.props.isViewingFlightInfo && this.props.activeFlight != null) {
			modalContent = (
				<FullFlightInfo flight={this.props.activeFlight}></FullFlightInfo>
			);
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
					<Modal showModal={isModal}>
						<ModalCard>{modalContent}</ModalCard>
					</Modal>
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
		isBookingFlight: state.flights.isBookingFlight,
		isViewingFlightInfo: state.flights.isViewingFlightInfo,
		appModal: state.app.modal,
		flightModal: state.flights.modal,
		activeFlight: state.flights.activeFlight,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
