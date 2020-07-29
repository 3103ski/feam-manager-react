import React from 'react';
import s from './LabeledDetail.module.scss';

const LabeledDetail = (props) => {
	const containerClasses = props.specialClass
		? `${props.specialClass} ${s.FieldDetail}`
		: s.FieldDetail;
	return (
		<div className={containerClasses}>
			<h2>{props.label}: </h2>
			<p>{props.children}</p>
		</div>
	);
};

export default LabeledDetail;
