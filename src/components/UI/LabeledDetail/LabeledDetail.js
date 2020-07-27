import React from 'react';
import s from './LabeledDetail.module.scss';

const LabeledDetail = (props) => {
	return (
		<div className={s.FieldDetail}>
			<h2>{props.label}: </h2>
			<p>{props.children}</p>
		</div>
	);
};

export default LabeledDetail;
