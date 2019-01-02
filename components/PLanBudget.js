import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PLanBudget extends React.Component {
  render() {
    return (
     
      <View style={styles.inner} >
          <Text> Hello form Plan Budget</Text>
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
