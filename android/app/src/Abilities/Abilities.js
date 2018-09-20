import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class StartScreen extends React.Component{

    state = {
        str : 0
    }

    componentDidMount(){
       let x = this.GenerateAbilityScore();
        this.setState({str:x})
    }

    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>StartScreen, Str = {this.state.str}</Text>
            </View>
        )
    }

    RollDie = (dieValue) => {
        return Math.floor(Math.random() * dieValue)+1;
    }

    GenerateAbilityScore()
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