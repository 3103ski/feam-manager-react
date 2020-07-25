// Framework / Utility
import React from './node_modules/react';
import s from './StandardNav.module.scss';
import { Link } from './node_modules/react-router-dom';

// Assets
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
							<Link to='/today'>TODAY'S SCHEDULE</Link>
						</li>
						<li>
							<Link to='/flights'>ALL FLIGHTS</Link>
						</li>
						<li>
							<Link to='/clients'>ALL CLIENTS</Link>
						</li>
						<li>
							<Link to='/staff'>MANAGE STAFF</Link>
						</li>
					</ul>
				</div>
				<div className={s.NavUser}></div>
			</div>
		);
	}
}

export default StandardNav;
