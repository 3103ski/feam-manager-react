import React from 'react';
import s from './ViewLayout.module.scss';

class ViewLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className={s.ViewLayout}>{this.props.children}</div>;
	}
}

export default ViewLayout;
