import React from 'react';
import s from './Layout.module.scss';

class Layout extends React.Component {
	render() {
		return <div className={s.appLayout}>{this.props.children}</div>;
	}
}

export default Layout;
