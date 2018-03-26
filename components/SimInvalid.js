import React, { Component } from 'react';
import {  View, Text, AsyncStorage} from 'react-native';
import {
	Button,
	Container,
	Header,
	Content,
	Left
} from 'native-base'
import { NavigationActions } from 'react-navigation'
export default class InvalidSim extends Component {
	goToMainScreen() {
		AsyncStorage.clear()
		const goTo = NavigationActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Welcome' })]
		})
		this.props.navigation.dispatch(goTo);
	}
	render() {
		return (
			<Container> 
				<Header/>
				<Content contentContainerStyle={{ backgroundColor: 'indigo', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<View >
				<Left >
							<Text style={{ margin: 20, fontWeight: 'bold', color: 'white'}}> Invalid Sim-page !</Text>
					<Left> 
					<Button
					onPress={() => this.goToMainScreen()} 
					success
					bordered><Text style={{fontWeight: 'bold', color:'white'}}> Re-Take Pic </Text></Button>
					</Left>
					</Left>
				</View>
				</Content>
			</Container>
		);
	}
}
