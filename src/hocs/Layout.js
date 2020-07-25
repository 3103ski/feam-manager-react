import React from 'react';
import s from './Layout.module.scss';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className={s.appLayout}>{this.props.children}</div>;
	}
}
export default Layout;
