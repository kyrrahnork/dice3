import React from 'react';
import {
    View,
    Text,
    TextInput,
    Picker,
    Button,
    StyleSheet
} from 'react-native';

export default class StartScreen extends React.Component{

    state = {
        playerName: '',
        characterName: '',
        gender: 'Male',
        alignment: 'True Neutral',
        description: ''
    }

    render(){

        const alignments = ['Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil', 'Neutral Good', 'True Neutral', 'Neutral Evil', 'Lawful Good', 'Lawful Neutral', 'Chaotic Good']
        const alignmentPickers = alignments.map( (alignment) => {
            return (
            <Picker.Item
                key={alignment}
                label={alignment}
                value={alignment}
            />
            )
        } )

        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Please enter player and character information below:</Text>
                <Text>Enter player's name:</Text>
                <TextInput 
                    onChangeText={
                        (text)=> this.setState({
                            playerName:text
                        })
                    }
                />
                <Text>Enter character's name:</Text>
                <TextInput 
                    onChangeText={
                        (text)=> this.setState({
                            characterName:text
                        })
                    }
                />
                <Text>Enter character's gender:</Text>
                <Text>Selected: {this.state.gender}</Text>
                <Picker 
                selectedValue={this.state.gender}
                style={{height:25, width:50}}
                onValueChange={
                    (itemValue,itemIndex)=>this.setState({gender:itemValue})}> 
                    <Picker.Item
                        label='Male'
                        value='Male'
                    />
                    <Picker.Item
                        label='Female'
                        value='Female'
                    />
                </Picker>
                <Text>Enter character's alignment:</Text>
                <Text>Selected: {this.state.alignment}</Text>
                <Picker 
                selectedValue={this.state.alignment}
                style={{height:25, width:50}}
                onValueChange={
                    (itemValue,itemIndex)=>this.setState({alignment:itemValue})}>
                    {alignmentPickers}
                </Picker>
                <Text>Enter character's description:</Text>
                <TextInput 
                    onChangeText={
                        (text)=> this.setState({
                            description:text
                        })
                    }
                />
                <View
                style={{
                        paddingTop: 50
                        }}
                >
                    <Button
                        style={{
                        textAlign: 'center',
                        fontSize: 40,
                        color: 'red',
                        paddingTop: 50
                        }}
                        title='press to confirm entries'
                        onPress={()=> this.props.navigation.navigate('Abilities')}
                    >
                    </Button>
                </View>
            </View>
        )
    }
}