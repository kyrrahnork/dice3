import React, { Component } from 'react';
import { 
  Text, 
  TextInput,
  View, 
  StyleSheet 
} from 'react-native';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nums: [1, 2, 3]
  //   }
  // }
  state = {
      strength : 9,
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({
            strength : text
          })}
        />
        <Text style={styles.red}>Hello world!</Text>
        <Text>Strength: {this.state.strength}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  }, 
  red: {
    backgroundColor: 'green',
    fontSize: 60,
  }
});
