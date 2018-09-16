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
      strength : this.GenerateAbilityScore(),
      dexterity : this.GenerateAbilityScore(),
      consitution : this.GenerateAbilityScore(),
      intelligence : this.GenerateAbilityScore(),
      wisdom : this.GenerateAbilityScore(),
      charisma : this.GenerateAbilityScore()

  }

  GenerateAbilityScore(){
    var firstDie = (Math.floor(Math.random()*6)+1);
    var secondDie = (Math.floor(Math.random()*6)+1);
    var thirdDie = (Math.floor(Math.random()*6)+1);
    var forthDie = (Math.floor(Math.random()*6)+1);
    var lowest = Math.min(firstDie, secondDie, thirdDie, forthDie);
    var sum = (firstDie + secondDie + thirdDie + forthDie) - lowest;

    return(sum);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.entry}>Enter score below: </Text>
        <TextInput
          onChangeText={(text) => this.setState({
            strength : text
          })}
        />
        <Text style={styles.green}>Hello world!</Text>
        <Text>Strength: {this.state.strength}</Text>
        <Text>Dexterity: {this.state.dexterity}</Text>
        <Text>Consitution: {this.state.consitution}</Text>
        <Text>Intelligence: {this.state.intelligence}</Text>
        <Text>Wisdom: {this.state.wisdom}</Text>
        <Text>Charisma: {this.state.charisma}</Text>
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
  green: {
    backgroundColor: 'green',
    fontSize: 60,
  },
  entry: {
    backgroundColor: 'red',
    fontSize: 20,
    color:'black',
  }

});
