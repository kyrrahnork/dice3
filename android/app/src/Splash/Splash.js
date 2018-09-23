import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';

export default class BackgroundImage extends Component{
    static navigationOptions={
        header:null
    };

    render() {
        const resizeMode = 'center';

    return (
    <View
        style={{
        flex: 1,
        backgroundColor: '#eee',
        }}
    >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
              height: null, 
              width: null,
            }}
            source={require('../main/res/drawable/screen.png')}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Button
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'red'
            }}
            title='press to begin'
            onPress={()=> this.props.navigation.navigate('Start')}
          >
          </Button>
        </View>
    </View>
    )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover'
    }
});
