const INITIAL_STATE = {
	currentUser: null
};
const userReducr = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
				currentUSre: action.payload
			};

		default:
			return state;
	}
};

export default userReducr;
