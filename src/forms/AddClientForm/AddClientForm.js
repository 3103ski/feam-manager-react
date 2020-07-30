// FRAMEWORK / UTILITY
import React from 'react';
import { updateObject } from '../../utility/utility';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// import CSRF from '../csrfToken';
// STYLES
import s from './AddClientForm.module.scss';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'rc-time-picker/assets/index.css';
// LOCAL COMPONENTS
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
// THIRD PARTY COMPONENTS
// import DatePicker from 'react-datepicker';
// import TimePicker from 'rc-time-picker';

class AddClientForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.isEditing ? this.props.currClient.name : '',
			contactNumber: this.props.isEditing
				? this.props.currClient.contactNumber
				: '',
			clientNotes: this.props.isEditing
				? this.props.currClient.clientNotes
				: '',
			address: this.props.isEditing ? this.props.currClient.address : '',
		};
	}

	handleNameOnChange = (event) => {
		let state = this.state;
		this.setState(
			updateObject(state, {
				name: event.target.value,
			})
		);
	};

	handleAddressOnChange = (event) => {
		let state = this.state;
		this.setState(
			updateObject(state, {
				address: event.target.value,
			})
		);
	};

	handleContactNumberOnChange = (event) => {
		let state = this.state;
		this.setState(
			updateObject(state, {
				contactNumber: event.target.value,
			})
		);
	};

	handleClientNotesOnChange = (event) => {
		let state = this.state;
		this.setState(
			updateObject(state, {
				clientNotes: event.target.value,
			})
		);
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const data = this.state;
		if (this.props.isEditing) {
			const id = this.props.currClient.id;
			this.props.putForm(data, id);
		} else {
			this.props.postForm(data);
		}
	};

	render() {
		const clientData = this.props.currClient ? this.props.currClient : null;
		const edit = this.props.isEditing;
		const cancelBtnFunction = edit
			? 'toggleIsUpdatingClient'
			: 'toggleAddClient';

		return (
			<form onSubmit={this.handleFormSubmit} className='form'>
				<Input
					inputType='hidden'
					inputValue='/clients'
					inputName='next'
					inputAction='/create-client'></Input>
				<Input
					inputOnChange={this.handleNameOnChange}
					inputType='text'
					inputName='name'
					inputValue={edit ? clientData.name : ''}
					inputPlaceholder='Name'></Input>
				<Input
					inputType='text'
					inputName='contactNumber'
					inputValue={edit ? clientData.contactNumber : ''}
					inputOnChange={this.handleContactNumberOnChange}
					inputPlaceholder='Contact Number'></Input>
				<Input
					inputName='clientNotes'
					inputType='text'
					inputValue={edit ? clientData.clientNotes : ''}
					inputOnChange={this.handleClientNotesOnChange}
					inputPlaceholder='Client Notes'
					inputTag='textArea'></Input>
				<Input
					inputType='text'
					inputOnChange={this.handleAddressOnChange}
					inputValue={edit ? clientData.address : ''}
					inputPlaceholder='Address'
					inputName='address'></Input>
				<div className={s.ButtonRow}>
					<Button client={clientData} btnFunction={cancelBtnFunction}>
						CANCEL
					</Button>
					<Button btnType='submit' specialClass='GreenBtn'>
						{this.props.isEditing ? 'UPDATE CLIENT' : 'ADD CLIENT'}
					</Button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currClient: state.clients.currClient,
		isEditing: state.clients.isEditingClient,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		postForm: (data) => dispatch(actions.createClientInit(data)),
		putForm: (data, id) => dispatch(actions.updateClientInit(data, id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClientForm);
