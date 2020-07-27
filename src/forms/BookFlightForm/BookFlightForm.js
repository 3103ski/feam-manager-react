// FRAMEWORK / UTILITY
import React from 'react';
// STYLES
import s from './BookFlightForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
// LOCAL COMPONENTS
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
// THIRD PARTY COMPONENTS
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';

class BookFlightForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			time: new Date().getTime,
		};
	}

	handleDateChange = (date) => {
		this.setState({
			startDate: date,
		});
	};

	render() {
		return (
			<form>
				<Input placeHolder='Flight #'></Input>
				<Input placeHolder='Tail #'></Input>
				<Input placeHolder='Parking Lot'></Input>
				<Input placeHolder='Routing'></Input>
				<Input placeHolder='Service Duration'></Input>
				<Input placeHolder='Remarks' inputType='textArea'></Input>
				<p>Select Date</p>
				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleDateChange}
				/>
				<p>Select Scheduled TOA</p>
				<TimePicker
					name='scheduledTOA'
					showSecond={false}
					className={'sTOA'}
					onChange={() =>
						console.log(
							document.querySelector('.sTOA').firstChild.getAttribute('value')
						)
					}></TimePicker>
				<div className={s.ButtonRow}>
					<Button btnFunction='modalClose'>CANCEL</Button>
					<Button specialClass='GreenBtn'>BOOK FLIGHT</Button>
				</div>
			</form>
		);
	}
}

export default BookFlightForm;
