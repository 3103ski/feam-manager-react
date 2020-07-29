// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
// COMPONENTS
import ClientListItem from './ClientListItem/ClientListItem';

class ClientList extends React.Component {
	render() {
		let clients = <h1>LOADING CLIENTS...</h1>;

		if (!this.props.clientsLoaded) {
			this.props.clientsInit();
		}

		if (!this.props.isLoadingClients) {
			clients = this.props.clientList ? (
				this.props.clientList.map((client, index) => {
					return <ClientListItem key={index} client={client}></ClientListItem>;
				})
			) : (
				<h1>False Load</h1>
			);
		}
		return <div>{clients}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		clientList: state.clients.clientList,
		clientsLoaded: state.clients.clientsLoaded,
		isLoadingClients: state.clients.isLoadingClients,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		clientsInit: () => dispatch(actions.fetchClientsInit()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
