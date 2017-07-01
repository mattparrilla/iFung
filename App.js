import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'http://www.owlmeds.com/wp-content/uploads/2015/10/chanterelles_670.jpg' }}
        />
        <Text>Hi James</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
