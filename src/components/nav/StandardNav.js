import React from 'react';
import s from './StandardNav.module.scss';
import logo from '../../assets/logo.png';

class StandardNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={s.NavContainer}>
				<div className={s.NavLinks}>
					<img src={logo} alt='logo' />
					<ul>
						<li>
							<a href='/'>TODAY'S SCHEDULE</a>
						</li>
						<li>
							<a href='/'>ALL FLIGHTS</a>
						</li>
						<li>
							<a href='/'>ALL CLIENTS</a>
						</li>
						<li>
							<a href='/'>MANAGE STAFF</a>
						</li>
					</ul>
				</div>
				<div className={s.NavUser}></div>
			</div>
		);
	}
}

export default StandardNav;
