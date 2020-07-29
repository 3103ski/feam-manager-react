// FRAMEWORK / UTILITY
import React from 'react';
// STYLE
import s from './ConfirmAction.module.scss';
// COMPONENTS
import Button from '../../Button/Button';

const ConfirmAction = (props) => {
	let confBtnFunction, confBtnText, confMsg, cancelBtnFunction;
	let confirmBtnClass = '';
	let cancelBtnClass = '';
	switch (props.confirmType) {
		case 'deleteClient':
			confMsg =
				'Are you sure you want to delete this client? You can not undo this action.';
			confBtnFunction = 'deleteClient';
			cancelBtnFunction = 'toggleIsDeletingClient';
			confBtnText = 'DELETE CLIENT';
			confirmBtnClass = 'RedBtn';
			break;
		default:
			break;
	}

	return (
		<div className={s.ConfirmContainer}>
			<h2>ARE YOU SURE?</h2>
			<p>{confMsg}</p>
			<div className={s.ConfirmButtons}>
				<Button specialClass={cancelBtnClass} btnFunction={cancelBtnFunction}>
					CANCEL
				</Button>
				<Button specialClass={confirmBtnClass} btnFunction={confBtnFunction}>
					{confBtnText}
				</Button>
			</div>
		</div>
	);
};

export default ConfirmAction;
