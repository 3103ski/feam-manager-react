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
			name: '',
			contactNumber: '',
			clientNotes: '',
			address: '',
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
		this.props.postForm(data);
	};

	render() {
		return (
			<form
				onSubmit={this.handleFormSubmit}
				className='form'
				method='POST'
				action='http://localhost:8000/api/clients/'>
				<Input
					inputType='hidden'
					inputValue='/clients'
					inputName='next'
					inputAction='/create-client'></Input>
				<Input
					inputOnChange={this.handleNameOnChange}
					inputType='text'
					inputName='name'
					inputPlaceholder='Name'></Input>
				<Input
					inputType='text'
					inputName='contactNumber'
					inputOnChange={this.handleContactNumberOnChange}
					inputPlaceholder='Contact Number'></Input>
				<Input
					inputName='clientNotes'
					inputOnChange={this.handleClientNotesOnChange}
					inputPlaceholder='Client Notes'
					inputTag='textArea'></Input>
				<Input
					inputType='text'
					inputOnChange={this.handleAddressOnChange}
					inputPlaceholder='Address'
					inputName='address'></Input>
				<div className={s.ButtonRow}>
					<Button btnFunction='toggleAddClient'>CANCEL</Button>
					<Button btnType='submit' specialClass='GreenBtn'>
						ADD CLIENT
					</Button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		postForm: (data) => dispatch(actions.createClientInit(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClientForm);
