import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render(props) {
    return (
     
      <View style={styles.container} >
          <Text> Hello form Home</Text>
          <Button title='Total Budget'
                  onPress={
                      () => this.props.navigation.navigate('Services')
                  }
          />
          <Button title='Plan Budget'
                  onPress={
                      () => this.props.navigation.navigate('About')
                  }
          />
          {/* <Button title='SignIn'
                  onPress={
                      () => this.props.navigation.navigate('SignIn')
                  }
          /> */}
           {/* <Button title='SignUp'
                  onPress={
                      () => this.props.navigation.navigate('SignUp')
                  }
          /> */}
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
