import React from 'react';
import s from './BookFlightForm.module.scss';

const BookFlightForm = (props) => {
	return (
		<div className={s.FormContainer}>
			<form>
				<input type='text' />
				<input type='text' />
				<input type='text' />
			</form>
		</div>
	);
};

export default BookFlightForm;
