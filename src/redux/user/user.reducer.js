const INITIAL_STATE = {
	currentUser: null,
};

//If state is undefined, leverage the default value

//reducer = function that takes in two inputs = state, action (type, newstate)
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.payload,
			};

		//note: every reducer gets every single action, even if not related to the reducer
		default:
			return state;
	}
};

export default userReducer;
