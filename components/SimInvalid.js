import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import {Button} from 'native-base'
export default class InvalidSim extends Component {
	render() {
		retakepicture =  () => {
			this.navigation.navigate('SnapSim')
		}
		return (
			<View style={{alignItems:'center', justifyContent: 'center', flex:1}}>
				<Text style={{fontWeight: 'bold'}}> InvalidSim </Text>
				<Button 
				success
				bordered
				onPress={()=> this.retakepicture()}> 
					<Text>
						Re-Take Picture
					</Text>
				</Button>
			</View>
		);
	}
}
