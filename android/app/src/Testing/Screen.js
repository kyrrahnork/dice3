import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import PanTest from "./PanTest";


let {height, width} = Dimensions.get('window');

export default class Screen extends Component {

  RollDie = (dieValue) => {
      return Math.floor(Math.random() * dieValue)+1;
  }

  GenerateAbilityScore = () => {
      let dieTotal;
      do {
          let firstDie = this.RollDie(6);
          let secondDie = this.RollDie(6);
          let thirdDie = this.RollDie(6);
          let fourthDie = this.RollDie(6);
          let lowest = Math.min(firstDie, secondDie, thirdDie, fourthDie);
      
          dieTotal = (firstDie + secondDie + thirdDie + fourthDie) - lowest;

      } while(dieTotal < 8)      

      return dieTotal;
  }
  

  render() {
    let abilitiesNums = [];
    for(let i=0; i < 6; i++){
      abilitiesNums.push(this.GenerateAbilityScore());
    }

    console.log(abilitiesNums)
    
    const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

    const abilitiesViews = abilities.map(ability => {
      return (
        <View key={ability} style={styles.dropZone}>
            <Text style={styles.dropZoneText}>{ability}</Text>
        </View>
      )
    })

    const circleViews =  abilitiesNums.map(num => {
      return (
        <PanTest 
        style={styles.ballSpacing}
        key={Math.random()}
        randomNum={num} 
        />
      )
    })
   

    return (
      <View style={styles.mainContainer}>
        {abilitiesViews}
        <View style={styles.ballContainer} >
            <View style={styles.row}>
            {circleViews}
            </View>        
        </View>
      </View>
    );  
  }
}

//drop ball code goes here

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    flex: 1

  },
  row: {
    flexDirection: "row",
  },
  dropZone: {
    flex: 1,
    backgroundColor: "#00334d",    
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center'
  },
  dropZoneText: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: "left",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
    }
});