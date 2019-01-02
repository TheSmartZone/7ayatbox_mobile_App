import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import PLanBudget from './components/PLanBudget.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';




export default class TotalBudget extends React.Component {
  render() {
    return (
     
      <View style={styles.inner} >
          <Text> Total Budget</Text>
          <TextInput placeholder="enter your budget here"/>
          <Button title='Submit'
                  onPress={
                      () => this.props.navigation.navigate('PLanBudget')
                  }
          />
   
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner:{
    width:'80%',
    height:'80%',
    backgroundColor:'rgba(255, 255, 255, 0.7)'
  }
});
