import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	modal: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_MODAL:
			if (!state.modal) {
				return updateObject(state, {
					modal: true,
				});
			} else {
				return updateObject(state, {
					modal: false,
				});
			}
		default:
			return state;
	}
};

export default appReducer;
