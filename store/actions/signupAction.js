import { CameraRoll } from 'react-native'
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

export function actionSignup (navigation) {
	return dispatch => {
		dispatch(singupLoading)
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
					axios.post('http://192.168.43.200:3000/users/simbio', formData, config)
						.then(response => {
							if (!response.data.exist) {
								dispatch(signupLoaded(response.data))
								navigation.navigate('Form')
							}
							console.log('ini response', response)
						})
						.catch(err => {
							console.log(err.response, 'ini dari beken')
						})
				})
		})
	}
}