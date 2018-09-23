import React from 'react';
import {
    View,
    Text,
    PanResponder,
    Animated
} from 'react-native';

export default class StartScreen extends React.Component{

    state = {
        abilities: {}
    }

    componentDidMount(){
        let abilitiesNums = [];
        this.setState({abilities: {
            strength:0,
            dexterity:0,
            constitution:0,
            intelligence:0,
            wisdom:0,
            charisma:0
        }})

        for(let i=0; i < 6; i++){
            abilitiesNums.push(this.GenerateAbilityScore());
        }
        this.setState({abilitiesNums: abilitiesNums})

    }

    render(){
        console.log("Scores generated are " + this.state.abilitiesNums);
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>StartScreen, Str = {this.state.abilities.strength}</Text>
                <Text>StartScreen, Str = {this.state.abilitiesNums}</Text>
            </View>
        )
    }

    RollDie = (dieValue) => {
        return Math.floor(Math.random() * dieValue)+1;
    }

    GenerateAbilityScore=() =>
    {
        do{
            var firstDie = this.RollDie(6);
            var secondDie = this.RollDie(6);
            var thirdDie = this.RollDie(6);
            var fourthDie = this.RollDie(6);
            var lowest = Math.min(firstDie, secondDie, thirdDie, fourthDie);
        
            var dieTotal = (firstDie + secondDie + thirdDie + fourthDie) - lowest;

        }while(dieTotal < 8)
        

        return dieTotal;
    }


}