// FRAMEWORK / UTILITY
import React from 'react';
// HOCs
import FullListLayout from '../../hocs/FullListLayout/FullListLayout';
// COMPONENTS
import ClientList from '../../components/Lists/ClientList/ClientList';

const Today = (props) => {
	return (
		<FullListLayout listType='clients'>
			<ClientList></ClientList>
		</FullListLayout>
	);
};

export default Today;
