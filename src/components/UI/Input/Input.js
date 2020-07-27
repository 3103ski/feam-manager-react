// FRAMEWORK / UTILITY
import React from 'react';
// STYLES
import s from './Input.module.scss';

const Input = (props) => {
	let inputElement;

	switch (props.inputType) {
		case 'textArea':
			inputElement = (
				<textarea rows='10' placeholder={props.placeHolder}></textarea>
			);
			break;
		default:
			inputElement = <input placeholder={props.placeHolder}></input>;
			break;
	}
	return <div className={s.InputContainer}>{inputElement}</div>;
};

export default Input;
