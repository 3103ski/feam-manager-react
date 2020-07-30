// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
// STYLE
import s from './FullClientInfo.module.scss';
// COMPONENTS
import Button from '../../UI/Button/Button';
import Detail from '../../UI/LabeledDetail/LabeledDetail';

class FullClientInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clientInfo: this.props.currClient ? this.props.currClient : null,
		};
	}
	render() {
		const c = this.state.clientInfo;
		const editBtn = !this.props.isEditing ? (
			<Button
				client={this.state.clientInfo}
				btnFunction='toggleIsUpdatingClient'>
				EDIT
			</Button>
		) : null;
		return (
			<div className={s.ClientDetailsContainer}>
				<Detail specialClass={s.ClientDetail} label='Name'>
					{c.name}
				</Detail>
				<Detail specialClass={s.ClientDetail} label='Client Notes'>
					{c.clientNotes}
				</Detail>
				<Detail specialClass={s.ClientDetail} label='Contact #'>
					{c.contactNumber}
				</Detail>
				<Detail specialClass={s.ClientDetail} label='Address'>
					{c.address}
				</Detail>
				<Detail specialClass={s.ClientDetail} label='Last Modified'>
					{c.lastModified}
				</Detail>
				<Button btnFunction='toggleClientDetails'>CLOSE DETAILS</Button>
				{editBtn}
				<Button btnFunction='toggleIsDeletingClient' specialClass='RedBtn'>
					DELETE CLIENT
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currClient: state.clients.currClient,
		isEditing: state.clients.isEditingClient,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FullClientInfo);
