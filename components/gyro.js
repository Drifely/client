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

// const accelerationObservable = new Accelerometer({
// 	updateInterval: 100, // defaults to 100ms 
// });


function SensorView(props) {

	const Component = RNSensors.decorator({
		...props,
	})(SensorsDisplay);

	return (
		<Component />
	)
}

function warning(){
	Alert.alert('WARNING')
	// sendSMS()
	// console.log(SensorDisplay.state.count)
}

sendSMS = () => {
	const reqBody = {
		api_key : '1ba88109',
		api_secret : '6gxuZl4lPvowscIZ',
		to : '6287877280598',
		from: 'Drifely',
		text: 'ati2 bang....pelan2 aja.....'
	}
	axios.post('https://rest.nexmo.com/sms/json', reqBody)
	.then(response => {
		console.warn(response.data);
	})
	.catch(err => {
		console.warn(err);
	})
}

let zNow = 0 
let count = 0

handleUgal = (z) => {
	if ( z > 2 || z < -2){
		// if(zNow > z) {
			count++
			console.log('check ugal in', count)
			if (count >= 10){
				warning()
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
		(z.toFixed(2) > 10 || z.toFixed(2) < -10 ) ? warning()	:null ,
		<Text onChange={z > 2 ?  handleUgal(z) : null} style={styles.welcome}>{name}:  Z: {z.toFixed(2)}</Text>
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

export default class DecoratorExample extends Component {

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