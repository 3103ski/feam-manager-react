// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
// STYLES
import s from './ClientListItem.module.scss';
// ASSETS
import iconEdit from '../../../../assets/icon_edit.png';
import iconPhone from '../../../../assets/icon_phone.png';

const ClientListItem = (props) => {
	const c = props.client;

	return (
		<div onClick={() => props.toggleClientDetails(c)} className={s.ClientListItem}>
			<h3 className={s.name}>{c.name}</h3>
			<div className={s.contact}>
				<img src={iconPhone} alt='editIcon' />
				<p>{c.contactNumber}</p>
			</div>
			<img onClick={() => props.toggleIsUpdatingClient(c)} src={iconEdit} alt='editIcon' />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currClient: state.clients.currClient,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleClientDetails: (client) => dispatch(actions.toggleClientDetails(client)),
		toggleIsUpdatingClient: (client) => dispatch(actions.toggleIsUpdatingClient(client)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientListItem);
