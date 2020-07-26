// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// STYLES
import s from './Modal.module.scss';

const Modal = (props) => {
	let modalClasses;
	if (!props.showModal) {
		modalClasses = `${s.Modal} ${s.Hide}`;
	} else {
		modalClasses = `${s.Modal}`;
	}
	return (
		<div onClick={props.modalClose} className={modalClasses}>
			{props.children}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		modalClose: () => dispatch(actions.modalClose()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
