import React, { Component } from 'react';
import { Container, Label,Content, Button, Text , Header, Item, Form , Input} from 'native-base'

export default class SignUp extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label style={{padding:10}}>No.SIM</Label>
							<Input value="test"/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>Name</Label>
							<Input value="test"/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>Address</Label>
							<Input value="test"/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>Gender</Label>
							<Input value="test"/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>POB</Label>
							<Input value="test"/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>DOB</Label>
							<Input value="test"/>
						</Item>
					</Form>
				</Content>
			</Container>
		);
	}
}
