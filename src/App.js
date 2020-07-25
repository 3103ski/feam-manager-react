import React from 'react';
import './App.scss';
import Layout from './hocs/Layout';
import Navbar from './components/nav/StandardNav';
import { Helmet } from 'react-helmet';

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
			</Layout>
		</div>
	);
}

export default App;
