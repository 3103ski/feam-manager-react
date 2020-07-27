// FRAMEWORK / UTILITY
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// STYLES
import s from './ListToolBar.module.scss';
// COMPONENTS
import Button from '../UI/Button/Button';

const ListToolbar = (props) => {
	return (
		<div className={s.ToolbarContainer}>
			<div className={s.FilterContainer}>
				<h2>Add filters later</h2>
			</div>
			<div className={s.BtnContainer}>
				<Button btnFunction='addFlight'>BOOK NEW FLIGHT</Button>
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
