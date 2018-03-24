import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { editSignup, registerAction} from '../store/actions/signupAction'
import { 
	Container,
	Label,
	Content,
	Spinner,
	Button,
	Text,
	Header,
	Item,
	Form,
	Input,
	Left,
	View} from 'native-base'

class SignUp extends Component {
	componentDidMount(){
		console.log('masuk sini', this.props)
	}
	changeSIMnum = e => {
		console.log('siap',e)
		const edit = {
			...this.props.form,
			simNum: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}

	changename = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			name: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}

	changeAddress = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			address: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}

	changepob = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			pob: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}

	changedob = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			dob: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}

	changegender = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			gender: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}

	register = () => {
		console.log('ini masuk kok ke sini')
		this.props.registerAction(this.props.form, this.props.navigation)
	} 
	render() {
		if (this.props.loading) {
			return (
				<View style={{justifyContent: 'center',alignItems:'center',flex:1}}><Spinner color='blue'/></View>
			)
		} else if (!this.props.loading) {
			return (
				<Container>
					<Header />
					<Content>
						<Form style={{justifyContent:'center', flex:1, alignItems:'center'}}>
							<Item floatingLabel>
								<Label style={{padding:10}}>No.SIM: </Label>
								<Input onChangeText={(text)=> this.changeSIMnum(text)} name="simNUm" value={this.props.form.simNum}/>
							</Item>
							<Item floatingLabel>
								<Label style={{ padding: 10 }}>Name: </Label>
								<Input onChangeText={(text)=> this.changename(text)} name="name" value={this.props.form.name}/>
							</Item>
							<Item floatingLabel>
								<Label style={{ padding: 10 }}>Address: </Label>
								<Input onChangeText={(text)=> this.changeAddress(text)} name="address" value={this.props.form.address}/>
							</Item>
							<Item floatingLabel>
								<Label style={{ padding: 10 }}>Gender: </Label>
								<Input onChangeText={(text)=> this.changegender(text)} name="gender" value={this.props.form.gender}/>
							</Item>
							<Item floatingLabel>
								<Label style={{ padding: 10 }}>POB: </Label>
								<Input onChangeText={(text)=> this.changepob(text)} name="pob" value={this.props.form.pob}/>
							</Item>
							<Item floatingLabel>
								<Label style={{ padding: 10 }}>DOB: </Label>
								<Input onChangeText={(text)=> this.changedob(text)} name="dob" value={this.props.form.dob}/>
							</Item>
							<Left style={{marginTop: 10}}> 
							<Button success bordered onPress={()=>this.register()}><Text> Sign Up </Text></Button>
							</Left>
						</Form>
					</Content>
				</Container>
			);
		}
	}

}

const mapStateToProps = state => ({
	form: state.signupReducer.form,
	loading: state.signupReducer.loading
})

const mapDispatchToProps = dispatch => (bindActionCreators({
	editSignup,
	registerAction
},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
