//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class awGeo extends Component {

	constructor () {
		super()
		this.state = {
			gloc : {coords: {speed: 0}}
		}
	}

	componentDidMount = () => {
		let options ={
			distanceFilter: 2,
			maximumAge: 3000
		}
		this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
					gloc: position
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000, distanceFilter: 2 },
    );
	}
		// navigator.geolocation.watchPosition((data, err, options) => {
		// 	this.setState({
		// 		gloc: data
		// 	})
		// })

		componentWillUnmount() {
			navigator.geolocation.clearWatch(this.watchId);
		}

	render() {
		return (
			<View style={styles.container}>
				<Text>{JSON.stringify(this.state.gloc)}</Text>
				<Text> SPEED: {Math.floor(this.state.gloc.coords.speed * 3.6)}</Text>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

//make this component available to the app
export default awGeo;
