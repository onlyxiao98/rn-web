// Example component
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <TouchableOpacity onPress={() => console.log('clicked')}>
          <Text>Click me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });

export default App;