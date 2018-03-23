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
			return {
				...state,
				loading: true
			}
			case 'SIGNUP_LOADED':
			return {
				...state,
				loading:false,
				form:{
					...action.payload
				}
			}
		default:
			return state
	}
}