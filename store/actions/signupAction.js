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
		console.warn('ini form na', form)
		axios.post('http://drifely-s.wizawt.com/users/reg', {
			...form
		}).then(response => {
			dispatch(invalidSim())
			AsyncStorage.setItem('token',response.data.jwt)
			.then(respon => {
				console.warn('ini masuk async response', respon);
				navigation.navigate('Tutorial')
			})
			.catch(err => {
				console.warn(err);
			})
			
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
								AsyncStorage.setItem('token',response.data.jwt)
								.then(x => {
									navigation.navigate('Tutorial')									
								}
								)

							}
								else if (!response.data.sim) {
								console.warn('sim invalid', response.data.sim)
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