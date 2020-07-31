// FRAMEWORK / UTILITY
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from './store/actions/index';

// COMPONENETS
import './App.scss';
import Navbar from './components/UI/Nav/StandardNav';
import ModalCard from './components/UI/Modal/ModalCard/ModalCard';
import ConfirmAction from './components/UI/Modal/ConfirmAction/ConfirmAction';

// MODAL DETAILS
import FullFlightInfo from './components/Content/FullFlightInfo/FullFlightInfo';
import FullClientInfo from './components/Content/FullClientInfo/FullClientInfo';

// FORMS
import FlightForm from './forms/BookFlightForm/BookFlightForm';
import ClientForm from './forms/AddClientForm/AddClientForm';
// import TestForm from './forms/clientTestAdd';

// Containers
import Today from './containers/TodaysSchedule/Today';
import Flights from './containers/AllFlights/AllFlights';
import Clients from './containers/AllClients/AllClients';
import Staff from './containers/ManageStaff/ManageStaff';

// HOCs
import Layout from './hocs/MainLayout/Layout';
import ViewLayout from './hocs/ViewLayout/ViewLayout';
import Modal from './components/UI/Modal/Modal';
import 'antd/dist/antd.css';
class App extends React.Component {
	render() {
		let modalContent;
		let isModal = false;

		// ===================================
		// 		MODAL CONTENT
		// ===================================

		// DETAILS
		if (this.props.isViewingFlightInfo) {
			modalContent = <FullFlightInfo></FullFlightInfo>;
			isModal = true;
		}

		if (this.props.isViewingClientInfo) {
			modalContent = <FullClientInfo></FullClientInfo>;
			isModal = true;
		}

		// POSTING FORMS
		if (this.props.isBookingFlight || this.props.isUpdatingFlight) {
			modalContent = (
				<FlightForm isEditing={this.props.isUpdatingFlight}></FlightForm>
			);
			isModal = true;
		}

		if (this.props.isAddingClient || this.props.isEditingClient) {
			modalContent = (
				<ClientForm isEditing={this.props.isEditingClient}></ClientForm>
			);
			isModal = true;
		}

		// CONFIRM ACTION

		if (this.props.isDeletingClient) {
			modalContent = <ConfirmAction confirmType='deleteClient'></ConfirmAction>;
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
		// FLIGHTS
		isBookingFlight: state.flights.isBookingFlight,
		isViewingFlightInfo: state.flights.isViewingFlightInfo,
		isUpdatingFlight: state.flights.isUpdatingFlightInfo,
		// CLIENTS
		isViewingClientInfo: state.clients.isViewingClientInfo,
		clientModal: state.clients.modal,
		isAddingClient: state.clients.isAddingClient,
		isDeletingClient: state.clients.isDeletingClient,
		isEditingClient: state.clients.isEditingClient,
		currClient: state.clients.currClient,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
