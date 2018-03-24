let signup = {
	loading: false,
	form: {
		name: '',
		address: '',
		gender: '',
		pob: '',
		dob: '',
		simNum: '',
	},
	sim: false
}

export default function signupReducer (state = signup, action) {
	switch (action.type) {
		case 'SIGNUP_LOADING':
			console.log('ini jalan loading')
			return {
				...state,
				loading: true
			}
			case 'SIGNUP_LOADED':
			return {
				...state,
				loading: false,
				form:{
					...state.form,
					...action.payload
				}
			}
			case 'EDIT_FORM': 
			return {
				...state,
				form: {
					...state.form,
					...action.payload
				}
			}
		default:
			return state
	}
}