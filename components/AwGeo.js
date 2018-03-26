//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { Container } from 'native-base'

// create a component
class awGeo extends Component {

	constructor () {
		super()
		this.state = {
			gloc : {coords: {speed: 0}}
		}
	}

	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				gloc: position
			})
		})
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
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000, distanceFilter: 1 },
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

			<Container style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: this.state.gloc.coords.latitude || 37.78825,
						longitude: this.state.gloc.coords.longitude || -122.4324,
						latitudeDelta: 0.020,
						longitudeDelta: 0.0121,
					}}
					>
						<Marker
							coordinate= {{latitude: this.state.gloc.coords.latitude || 37.7883, longitude: this.state.gloc.coords.longitude || -122.4324}}
							title= "Test"
							description= "Current Position" 
							/>
				</MapView>
				<View style={styles.containerSpeed}>
					<Text>{JSON.stringify(this.state.gloc)}</Text>
					<Text> SPEED: {Math.floor(this.state.gloc.coords.speed * 3.6)}</Text>
				</View>
			</Container>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	containerSpeed: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		...StyleSheet.absoluteFillObject,
		height: 700,
		width: 400,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

const mapDispatchToProps = dispatch => bindActionCreators({
  SET_LOCATION
},dispatch)

//make this component available to the app
export default awGeo;
