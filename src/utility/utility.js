// *********************************************************
// ***** { statusColor }                   *****************
// *********************************************************

// Will return color as a string when fed status as a string

export const statusColor = (status) => {
	// console.log(`I see: `, status);
	switch (status) {
		case 'New Song':
			status = `#757575`;
			break;
		case 'In Progress':
			status = `#D0D0D0`;
			break;
		case 'Mix Sent':
			status = `#3BADFF`;
			break;
		case 'Revisions Requested':
			status = `#FFC83B`;
			break;
		case 'Live Stream Scheduled':
			status = `#FFE03B`;
			break;
		case 'Sent Final Mixes':
			status = `#3BFFD0`;
			break;
		case 'Completed':
			status = `#57FF3B`;
			break;
		default:
			status = `#000000`;
	}
	return status;
};

// *********************************************************
// ***** { randomId }                      *****************
// *********************************************************

const date = () => {
	const date = new Date();
	const randomNum = `${date.getSeconds()}${date.getMilliseconds()}${date.getMilliseconds()}${date.getMinutes()}`;

	return randomNum;
};

const ID = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const randomId = () => {
	const rand1 = date();
	const rand2 = ID();

	const id = `${rand1}${rand2}`;
	return id;
};

// *********************************************************
// ***** { updateObject }                  *****************
// *********************************************************

export const updateObject = (oldObject, updatedValues) => {
	return {
		...oldObject,
		...updatedValues,
	};
};

// *********************************************************
// ***** { checkValidity }                  ****************
// *********************************************************

export const checkValidity = (value, rules) => {
	let isValid = true;

	if (rules.required) {
		isValid = value.trim() !== '' && isValid;
	}
	if (rules.minLength) {
		isValid = value.length >= rules.minLength && isValid;
	}
	if (rules.maxLength) {
		isValid = value.length <= rules.maxLength && isValid;
	}
	return isValid;
};

// *********************************************************
// ***** { formatTime }                  ****************
// *********************************************************

export const formatTime = (inputDate) => {
	const date = new Date(inputDate);
	let hour = date.getHours();
	let min = date.getMinutes();
	hour = hour > 0 && hour < 10 ? '0' + hour : hour;
	hour = hour === 0 ? 12 : hour;
	min = min < 10 ? '0' + min : min;
	return `${hour}:${min}`;
};

// *********************************************************
// ***** { monthStrToNum }                  ****************
// *********************************************************

export const monthStrToNum = (monthStr) => {
	let newMonth;
	if (monthStr === 'Jan') {
		newMonth = 1;
	} else if (monthStr === 'Feb') {
		newMonth = 2;
	} else if (monthStr === 'Mar') {
		newMonth = 3;
	} else if (monthStr === 'Apr') {
		newMonth = 4;
	} else if (monthStr === 'May') {
		newMonth = 5;
	} else if (monthStr === 'Jun') {
		newMonth = 6;
	} else if (monthStr === 'Jul') {
		newMonth = 7;
	} else if (monthStr === 'Aug') {
		newMonth = 8;
	} else if (monthStr === 'Sep') {
		newMonth = 9;
	} else if (monthStr === 'Oct') {
		newMonth = 10;
	} else if (monthStr === 'Nov') {
		newMonth = 11;
	} else if (monthStr === 'Dec') {
		newMonth = 12;
	}
	return newMonth;
};

// ********************************************************
// ***** { makeNow }                        ****************
// *********************************************************

//  arg "when" takes 'yesterday', 'today', or 'tomorrow'

export const makeNow = (when) => {
	const d = new Date();
	switch (when) {
		case 'yesterday': {
			const [m, dA, y] = [d.getMonth() + 1, d.getDate() - 1, d.getFullYear()];
			when = `${m}${dA}${y}`;
			break;
		}
		case 'today': {
			const [m, dA, y] = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
			when = `${m}${dA}${y}`;
			break;
		}
		case 'todayExp': {
			const [m, dA, y] = [d.getMonth() + 1, d.getDate() + 2, d.getFullYear()];
			when = `${m}${dA}${y}`;
			break;
		}
		case 'tomorrow': {
			const [m, dA, y] = [d.getMonth() + 1, d.getDate() + 1, d.getFullYear()];
			when = `${m}${dA}${y}`;
			break;
		}
		case 'tomorrowExp': {
			const [m, dA, y] = [d.getMonth() + 1, d.getDate() + 3, d.getFullYear()];
			when = `${m}${dA}${y}`;
			break;
		}
		default: {
			break;
		}
	}
	return when;
};
