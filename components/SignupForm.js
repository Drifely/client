import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Container, Label,Content, Button, Text , Header, Item, Form , Input} from 'native-base'

class SignUp extends Component {
	componentDidMount(){
		console.log('masuk sini', this.props.form)
	}
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label style={{padding:10}}>No.SIM</Label>
							<Input value={this.props.form.simNum}/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>Name</Label>
							<Input value={this.props.form.name}/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>Address</Label>
							<Input value={this.props.form.address}/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>Gender</Label>
							<Input value="test"/>
						</Item>
						<Item floatingLabel>
							<Label style={{ padding: 10 }}>POB</Label>
							<Input value={this.props.form.pob}/>
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

const mapStateToProps = state => ({
	form: state.signupReducer.form
})

export default connect(mapStateToProps)(SignUp)
