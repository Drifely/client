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
			// console.warn(response)
			// dispatch(bioData(response))
			console.warn(response.data);
			AsyncStorage.setItem('token', response.data.jwt)
			navigation.navigate('Primary')
			
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
					axios.post('http://drifely-s.wizawt.com/users/simBio', formData, config)
						.then(response => {
							console.log(response.data,'ini response')
							if (!response.data.vision.exist && response.data.vision.sim) {
								console.log(response.data.sim,'ini regis')
								dispatch(signupLoaded(response.data.vision))
								navigation.navigate('Form')
								
							} else if (response.data.exist) {
								// dispatch(invalidSim())
								navigation.navigate('Tutorial')
								AsyncStorage.setItem('token','12345')

							}
								else if (!response.data.vision.sim) {
								console.warn('sim invalid', response.data)
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