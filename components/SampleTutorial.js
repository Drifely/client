import React, { Component } from 'react';
import { Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container, Header, View, DeckSwiper,Button, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Logo from './Logo'


const cards = [
  {
    text: 'WELCOME',
    name: '',
    image: require('../assets/logo.png'),
    next: true,
  }
];

class Welcome extends Component {
  goToMainScreen () {
    const goTo = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName:'Primary'})]
    })
    this.props.navigation.dispatch(goTo);
  }
  render() {
    return (
      <Container>
         
           <DeckSwiper
             dataSource={cards}
             renderItem={item =>
               <Card style={{ backgroundColor: '#EAEAEA', padding:10 }}>
                 <CardItem cardBody style={{ backgroundColor: '#EAEAEA', padding:10  }}>
                   <Image size={30} style={{ height: 400, flex: 1, width:250 }} source={item.image} />
                 </CardItem>
                 <CardItem cardBody style={{ backgroundColor: '#EAEAEA' }}>
                   <View style={{ height: 300, flex: 1, backgroundColor: '#EAEAEA', justifyContent:'center', alignItems:'center' }}>
                     <Left>
                     <Text style={{ color: '#334C8E' }}>{item.text}</Text>
                     <Text style={{ color: '#334C8E' }}>{item.name}</Text>
                     {item.next ? <Button success bordered onPress = { () => {this.goToMainScreen()}}><Text> Let's Ride </Text></Button> : null}
                   </Left>
                   </View>
                 </CardItem>
            
               </Card>
             }
           />
         
       </Container>
    );
  }
}

export default Welcome;