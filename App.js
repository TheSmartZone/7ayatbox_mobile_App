import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Home from './components/Home.js';
import TotalBudget from './components/TotalBudget.js';
import PLanBudget from './components/PLanBudget.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator( {
  Home: Home,
  TotalBudget: TotalBudget,
  PLanBudget: PLanBudget,
  // SignIn: SignIn,
  // SignUp: SignUp,
} )
const AppContainer = createAppContainer(RootStack);

 export default class App extends React.Component {
  render() {
     return  (
      <View style={styles.inner} >
      <Text> Hello World This is Mobile App for 7ayatbox</Text>
      <AppContainer style={styles.home}/>
         {/* <ImageBackground 
           style={styles.container}
           source={require('./components/Background/img/couple.jpg')} >
        
     
        </ImageBackground> */}
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
