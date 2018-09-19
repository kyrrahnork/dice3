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

    // render(){
    //     return(
    //             <Image source={require('../main/res/drawable/screen.png')}
    //                 style={styles.backgroundImage}>

    //                 {this.props.children}    

    //             </Image>
    //     )
    // }

    render() {
        const resizeMode = 'center';
    const text = 'I am some centered text';

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
            {text}
          </Button>
        </View>
    </View>
    )
    }
}

class TestBackgroundImage extends Component{
    render() {
        return (
            <BackgroundImage>
                <Text style={styles.text}>button goes here</Text>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover'
    },

    // text: {
    //     textAlign:'center',
    //     color:'white',
    //     backgroundColor: 'rgba(0,0,0,0)',
    //     fontSize:32
    // }
});
