import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions, 
  Text
} from "react-native";

let {height, width} = Dimensions.get('window');

export default class PanTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      place : {
        x: 0,
        y: 0
      }
    };
  }



  componentWillMount() {

    // Add a listener for the delta value change

    this._val = { x:0, y:0 };
    this.state.pan.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),

      onPanResponderRelease: (e, gesture) => {
        this.setState({
          place : this._val
        })
        // Animated.spring(this.state.pan, {
        //   toValue: { x: 0, y: 0 },
        //   friction: 5
        // }).start();
      },
      

      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
        x: this._val.x,
        y: this._val.y
        })
        this.state.pan.setValue({ x:0, y:0});
      }
    });
  }

  render() {
    console.log(this.state.place);  
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
        <View>
          <Animated.View
            {...this.panResponder.panHandlers}
              style={[panStyle, styles.circle]}
            >
            <Text style={styles.circleNum}>{this.props.randomNum}</Text>
          </Animated.View>
        </View>
    );
  }
}

let circleMargin = Math.round((width - 300)/7);
let CIRCLE_RADIUS = (width/14);
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    marginTop: CIRCLE_RADIUS / 4,
    marginTop: 10,
    marginLeft: circleMargin/2,
    marginRight: circleMargin/2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  circleNum: {
    marginTop: 0
  }
});