import { CameraRoll , AsyncStorage} from 'react-native'
import ImageResizer from 'react-native-image-resizer'
import axios from 'axios'

function singupLoading () {
	return {
		type: 'SIGNUP_LOADING'
	}
}

function signupLoaded (payload) {
	return {
		type: 'SIGNUP_LOADED',
		payload: payload
	}
}

function errorLoad () {
	return {
		type: 'ERROR_LOADED'
	}
}

function editform(payload) {
	return {
		type: 'EDIT_FORM',
		payload: payload
	}
}

function register() {
	return {
		type: 'REGISTER'
	}
}
export function registerAction (form,navigation) {
	return dispatch => {
		dispatch(singupLoading())
		console.log('ini form na', form)
		axios.post('http://drifely-s.wizawt.com/users/reg', {
			...form
		}).then(response => {
			dispatch(invalidSim())
			navigation.navigate('Tutorial')
			AsyncStorage.setItem('token', '12345')
		})
		.catch(err => {console.log(err)})
	}
}

export function editSignup (payload) {
	return dispatch => {
		dispatch(editform(payload))
	}
}

function invalidSim () {
	return {
		type: 'INVALID_SIM'
	}
}

export function actionSignup (navigation) {
	return dispatch => {
		dispatch(singupLoading())
		console.log('haha masuk ini')
		CameraRoll.getPhotos({ first: 1 }).then((photos) => {
			console.log('masuk', photos)
			ImageResizer.createResizedImage(photos.edges[0].node.image.uri, 1080, 720, 'JPEG', 100)
				.then((img) => {
					console.log('ini img', img)
					img.type = 'image/jpeg';
					const config = { headers: { 'Content-Type': 'multipart/form-data' } };
					const formData = new FormData()
					formData.append('image', img)
					console.log('ini form data', formData)
					axios.post('http://drifely-s.wizawt.com/users/simbio', formData, config)
						.then(response => {
							console.log(response.data,'ini response')
							if (!response.data.exist && response.data.sim) {
								console.log(response.data.sim,'ini regis')
								dispatch(signupLoaded(response.data))
								navigation.navigate('Form')
								
							} else if (response.data.exist) {
								dispatch(invalidSim())
								navigation.navigate('Tutorial')
								AsyncStorage.setItem('token','12345')

							}
								else if (!response.data.sim) {
								console.log('sim invalid', response.data.sim)
								dispatch(invalidSim())
								navigation.navigate('Invalid')
							} 
						})
						.catch(err => {
							console.log(err)
						})
				})
		})
	}
}