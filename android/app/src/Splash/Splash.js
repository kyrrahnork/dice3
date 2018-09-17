import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class SplashScreen extends React.Component{
    static navigationOptions={
        header:null
    };

    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../main/res/drawable/screen.png')} />
            </View>
        )
    }
}
