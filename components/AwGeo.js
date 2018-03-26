//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { Container, Icon } from 'native-base'

// create a component
class awGeo extends Component {

	constructor () {
		super()
		this.state = {
			gloc : {coords: {speed: 0}}
		}
	}

	componentDidMount = () => {
		console.log('ini jalan??')
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				gloc: position
			})
		})
		let options ={
			distanceFilter: 2,
			maximumAge: 3000
		}
		console.log(this.state.gloc)
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
			<View style={{flex:1, width:'100%', height:'100%'}}>
			<View style={styles.container}>
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
			</View>
	
				<View style={styles.containerSpeed}>
					{/* <Text>{JSON.stringify(this.state.gloc)}</Text> */}
					<View style={{ flex: 1, flexDirection: 'row',alignItems:'flex-end'}}> 
					<Icon
						size={100}
						style= {{padding: 5}}
						name="speedometer" />
					<Text style={{
						fontSize: 35, 
						fontWeight: 'bold',
						padding: 2,
						fontFamily: 'digital-7',
						}}>
						{Math.floor(this.state.gloc.coords.speed * 3.6)} Km/h</Text>
					</View>
				</View>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	containerSpeed: {
		flex: 1,
		// justifyContent: 'flex-end',
		// backgroundColor: 'red',
		// alignItems: 'flex-start',
		
	},
	container: {
		flex: 1.5,
		// minHeight: 500,
		// maxWidth: 600,
		// width: 100
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//   SET_LOCATION
// },dispatch)

//make this component available to the app
export default awGeo;
