import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Background extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        source={require('/Users/rbk20/Desktop/7ayatbox_mobile_App/components/Background/img/couple-498484_1920.jpg')}
        >
        <Text>Hello World This is Mobile App for 7ayatboxxxxxx</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
