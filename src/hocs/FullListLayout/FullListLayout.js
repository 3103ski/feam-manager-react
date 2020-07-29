// Framework / Utility
import React from 'react';
// Styles
import s from './FullListLayout.module.scss';
// Components
import ListToolbar from '../../components/Lists/ListToolbar/ListToolBar';

class AllFlights extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={s.ListWrapper}>
				<div className={s.ListCol}>
					<ListToolbar listType={this.props.listType}></ListToolbar>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default AllFlights;
