// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// STYLES
import s from './ListToolBar.module.scss';

const ListToolbar = (props) => {
	return (
		<div className={s.ToolBarContainer}>
			<div className={s.FilterContainer}>
				<h2>Add filters later</h2>
			</div>
			<div className={s.BtnContainer}>
				<button onClick={props.toggleIsBookingFlight}>Book New Flight</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleIsBookingFlight: () => dispatch(actions.toggleIsBookingFlight()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListToolbar);
