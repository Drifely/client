import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {StyleSheet, Image} from 'react-native'
import { editSignup, registerAction} from '../store/actions/signupAction'
import AwesomeAlert from 'react-native-awesome-alerts';
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
	Icon,
	Left,
	View} from 'native-base'

class SignUp extends Component {
	constructor (props) {
		super(props);
    this.state = { showAlert: false }
  	}
	
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
	
	ChangeEmail = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			email: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}
	
	changeContact = e => {
		console.log('siap', e)
		const edit = {
			...this.props.form,
			contact: e
		}
		console.log('ini edit', edit)
		this.props.editSignup(edit)
	}
		hideAlert = () => {
	    this.setState({
	      showAlert: false
	    });
	  }
	register = () => {
		if(
			this.props.form.simNum 
			&& this.props.form.name 
			&& this.props.form.address 
			&& this.props.form.gender 
			&& this.props.form.pob 
			&& this.props.form.dob 
			&& this.props.form.contact 
			&& this.props.form.email) {
				// console.warn('ini masuk cuy ke sini lau udah boleh sign up')
				this.props.registerAction(this.props.form, this.props.navigation)
			} else {
				this.setState({
		      showAlert: true
		    });
			}
	} 
	render() {
		if (this.props.loading) {
			return (
				<View style={{justifyContent: 'center',alignItems:'center',flex:1}}><Spinner color='blue'/></View>
			)
		} else if (!this.props.loading) {
			return (
				<Container  style={{ backgroundColor: '#EAEAEA' }}>
					<Left style={{ padding:50,}}>
         <Image  style={styles.img} source={require('../assets/logo.png')} />
         </Left>
					<Content>
						<Form style={{justifyContent:'center', flex:1, alignItems:'center'}}>
							<Item disabled>
								<Icon active name='v-card' type='Entypo' />
								<Input onChangeText={(text)=> this.changeSIMnum(text)} name="simNUm" value={this.props.form.simNum}style={{fontSize: 10}}  placeholder="Driving License Number"/>
							</Item>
							<Item>
								<Icon active name='pencil' type='Entypo' />
								<Input onChangeText={(text)=> this.changename(text)} name="name" value={this.props.form.name} style={{fontSize: 10}} placeholder="Full Name"/>
							</Item>
							<Item>
								<Icon active name='home' type='Entypo' />
								<Input onChangeText={(text)=> this.changeAddress(text)} name="address" value={this.props.form.address} style={{fontSize: 10}} placeholder="Address"/>
							</Item>
							<Item>
								<Icon active name='transgender' type='FontAwesome' />
								<Input onChangeText={(text)=> this.changegender(text)} name="gender" value={this.props.form.gender} style={{fontSize: 10}} placeholder="Gender"/>
							</Item>
							<Item>
								<Icon active name='hospital-o' type='FontAwesome' />
								<Input onChangeText={(text)=> this.changepob(text)} name="pob" value={this.props.form.pob} style={{fontSize: 10}} placeholder="Place of birth"/>
							</Item>
							<Item>
								<Icon active name='date-range' type='MaterialIcons' />
								<Input onChangeText={(text)=> this.changedob(text)} name="dob" value={this.props.form.dob} style={{fontSize: 10}} placeholder="Date of birth"/>
							</Item>
							<Item>
								<Icon active name='phone-in-talk' type='MaterialIcons' />
								<Input onChangeText={(text)=> this.changeContact(text)} name="contact" value={this.props.form.contact} style={{fontSize: 10}} placeholder="Emergency Phone Contact"/>
							</Item>
							<Item>
								<Icon active name='email' type='MaterialIcons' />
								<Input onChangeText={(text)=> this.ChangeEmail(text)} name="email" value={this.props.form.email} style={{fontSize: 10}} placeholder="Emergency Email Contact"/>
							</Item>
							<Left style={{marginTop: 10, marginBottom: 10}}> 
							<Button success bordered onPress={()=>this.register()}><Text> Sign Up </Text></Button>
							</Left>
						</Form>
					</Content>
					<AwesomeAlert
						 show={this.state.showAlert}
						 showProgress={false}
						 title="Register Error !"
						 message="Please fill all required fields"
						 closeOnTouchOutside={true}
						 closeOnHardwareBackPress={false}
						 showConfirmButton={true}
						 confirmText="Oke!"
						 confirmButtonColor="#DD6B55"
						 onConfirmPressed={() => {
							 this.hideAlert();
				 }}
			 />
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

const styles = StyleSheet.create({
  img : {
    height: 200,
    width: 350,
    flex: 1
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
