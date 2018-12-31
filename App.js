import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Home from './components/Home.js';
import Services from './components/Services.js';
import About from './components/About.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator( {
  Home: Home,
  Services: Services,
  About: About,
  SignIn: SignIn,
  SignUp: SignUp,
} )
const AppContainer = createAppContainer(RootStack);

 export default class App extends React.Component {
  render() {
     return  (
      <View style={styles.inner} >
      <Text> Hello World This is Mobile App for 7ayatbox</Text>
      <AppContainer style={styles.home}/>
         <ImageBackground 
           style={styles.container}
           source={require('/Users/rbk20/Desktop/7ayatbox_mobile_App/components/Background/img/couple-498484_1920.jpg')} >
        
     
        </ImageBackground>
        </View>
  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'rgba(255, 255, 255, 0.7)'

  },
  inner:{
    width:'80%',
    height:'80%',
    backgroundColor:'rgba(255, 255, 255, 0.7)'
  },
  home:{
    color:'red'
  }
});
