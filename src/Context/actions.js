export async function loginUser(dispatch, loginPayload) {
	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let data = {};
		if(loginPayload.email == 'marcus@gmail.com' && loginPayload.password == '123') data = {user: loginPayload};

		console.log(data);
		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: 'Sorry, Email and password is not valid.' });
		console.log('Sorry, Email and password is not valid.');
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
}
