// FRAMEWORK / UTILITY
import React from 'react';
// STYLES
import s from './ModalCard.module.scss';

const ModalCard = (props) => {
	return (
		<div className={s.ModalCard}>
			<h1>{props.cardTitle}</h1>
			{props.children}
		</div>
	);
};

export default ModalCard;
