import React from 'react';
import s from './LabeledDetail.module.scss';

const LabeledDetail = (props) => {
	const containerClasses = props.sideLabel
		? `${s.SideLabel} ${s.FieldDetail}`
		: s.FieldDetail;
	return (
		<div className={containerClasses}>
			<h3>{props.label}: </h3>
			<p>{props.children}</p>
		</div>
	);
};

export default LabeledDetail;
