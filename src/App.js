// FRAMEWORK / UTILITY
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

// COMPONENETS
import './App.scss';
import Navbar from './components/nav/StandardNav';

// Containers
import Today from './containers/TodaysSchedule/Today';
import Flights from './containers/AllFlights/AllFlights';
import Clients from './containers/AllClients/AllClients';
import Staff from './containers/ManageStaff/ManageStaff';

// HOCs
import Layout from './hocs/MainLayout/Layout';
import ViewLayout from './hocs/ViewLayout/ViewLayout';

function App() {
	return (
		<div className='App'>
			<Helmet>
				<link
					href='https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
					rel='stylesheet'
				/>
			</Helmet>
			<Layout>
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

export default App;
