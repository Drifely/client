import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	Button
} from 'react-native';
import RNSensors, { Gyroscope } from 'react-native-sensors';
import axios from 'axios'
import { connect } from 'react-redux'
import { SET_GYRO } from '../store/actions/locatorAction'
import { bindActionCreators } from 'redux'

// const accelerationObservable = new Accelerometer({
// 	updateInterval: 100, // defaults to 100ms 
// });
let speed = 0
let watchId = navigator.geolocation.watchPosition(
	(position) => {
		// this.props.SET_LOCATION(position.coords.speed)
		// console.warn(position);
		
		speed = Math.round(position.coords.speed*3.6)
		console.warn(speed);
		
	},
	(error) => {console.warn(error)},
	{ enableHighAccuracy: true, timeout: 1000, maximumAge: 1000, distanceFilter: 1 },
)

function SensorView(props) {

	const Component = RNSensors.decorator({
		...props,
	})(SensorsDisplay);

	return (
		<Component />
	)
}

function warning(z, speed){
	if(speed >= 10) {
		Alert.alert('WARNING')
		console.warn('ini si z', z);
		console.warn('ini speed', speed);
	}

	
	// sendSMS()
	// console.log(SensorDisplay.state.count)
}

sendSMS = () => {
	const token = AsyncStorage.getItem('token')
	console.warn(token);
	axios.post('http://localhost:3000/users/emergency', {headers: {token: token}})
	.then(response => {
		response.data.status ? console.warn('SMS sent') : console.warn('gagal');
	})
	.catch(err => {
		console.warn(err);
	})
}

let zNow = 0 
let count = 0

handleUgal = (z, speed) => {
	if ( z > 2 || z < -2){
		// if(zNow > z) {
			count++
			console.log('check ugal in', count, z)
			if (count >= 10){
				// console.log(z);
				warning(z, speed)
			}

		// }
		setTimeout(() => {
			count--
			console.log('check ugal delete', count)
		}, 5000)
	}
	console.log('ini z', z)

	// zNow = Math.abs(z)

}

const SensorDisplay = ({
	value: {
		x = 0,
		y = 0,
		z = 0,
	} = {},
	name,
}) => {
	return (
		(z.toFixed(2) > 10 || z.toFixed(2) < -10 ) ? warning(z, speed)	:null ,
		<Text onChange={z > 2 ?  handleUgal(z, speed) : null} style={styles.welcome}>{name}:  Z: {z.toFixed(2)}</Text>
	)
};


class SensorsDisplay extends Component {
	
	render() {
		const {
			Gyroscope,
		} = this.props;

		return (
			<View style={styles.container}>
				<SensorDisplay name="Gyroscope" value={Gyroscope} />
			</View>
		);
	}
}
class DecoratorExample extends Component {

	render() {
		return (
			<View style={styles.container}>
				<SensorView Gyroscope  />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		// backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

const mapDispatchToProps = dispatch => bindActionCreators({
	SET_GYRO
},dispatch)

export default connect(null,mapDispatchToProps)(DecoratorExample)