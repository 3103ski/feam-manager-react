// FRAMEWORK / UTILITY
import React from 'react';
// STYLES
import s from './Input.module.scss';

const Input = (props) => {
	let inputElement,
		inputValue,
		inputType,
		inputAction,
		inputName,
		inputPlaceholder;

	inputValue = props.inputValue ? props.inputValue : '';
	inputType = props.inputType ? props.inputType : '';
	inputAction = props.inputAction ? props.inputAction : '';
	inputName = props.inputName ? props.inputName : '';
	inputPlaceholder = props.inputPlaceholder
		? props.inputPlaceholder
		: 'noplace';

	switch (props.inputTag) {
		case 'textArea':
			inputElement = (
				<textarea
					rows='10'
					defaultValue={inputValue}
					onChange={props.inputOnChange}
					type={inputType}
					name={inputName}
					action={inputAction}
					placeholder={inputPlaceholder}></textarea>
			);
			break;
		default:
			inputElement = (
				<input
					onChange={props.inputOnChange}
					type={inputType}
					defaultValue={inputValue}
					action={inputAction}
					name={inputName}
					placeholder={inputPlaceholder}></input>
			);
			break;
	}
	return <div className={s.InputContainer}>{inputElement}</div>;
};

export default Input;
