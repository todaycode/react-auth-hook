let user = localStorage.getItem('currentUser')
	? JSON.parse(localStorage.getItem('currentUser')).user
	: '';

export const initialState = {
	user: '' || user,
	errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return {
				...initialState,
			};
		case 'LOGIN_SUCCESS':
			return {
				...initialState,
				user: action.payload.user,
			};
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
