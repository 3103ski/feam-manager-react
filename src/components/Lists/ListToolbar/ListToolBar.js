// FRAMEWORK / UTILITY
import React from 'react';
// STYLES
import s from './ListToolBar.module.scss';
// COMPONENTS
import Button from '../../UI/Button/Button';

const ListToolbar = (props) => {
	let btnFunction, btnText;
	switch (props.listType) {
		case 'flights':
			btnFunction = 'toggleIsBookingFlight';
			btnText = 'BOOK NEW FLIGHT';
			break;
		case 'clients':
			btnFunction = 'toggleAddClient';
			btnText = 'CREATE NEW CLIENT';
			break;
		default:
			break;
	}
	return (
		<div className={s.ToolbarContainer}>
			<div className={s.FilterContainer}>
				<h2>Add filters later</h2>
			</div>
			<div className={s.BtnContainer}>
				<Button btnFunction={btnFunction}>{btnText}</Button>
			</div>
		</div>
	);
};

export default ListToolbar;
