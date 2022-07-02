import Matter from 'matter-js';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//function gives actual viewable body to rigidBody,which we cannot actually see on the screen.
const Objectify = (props) => { 
  //setting dimensions and positions(x,y)
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - width/2;
  const yBody = props.body.position.y - height/2;
  
  return (
    //stuff below is actually rendered out and has physics of a circular rigid body.
    <View style = {[styles.bubble, {
      top: yBody,
      left: xBody,
      height: props.body.circleRadius*2,
      width: props.body.circleRadius*2,
      borderRadius: props.body.circleRadius,
      borderWidth:0,
      flex:1,
      justifyContent:"center",
      alignItems:"center"
}]}
    >
      <Text>{props.touchId.touchId}</Text>
    </View>
  )
}


function Bubble(props) { // we create a rigid body, so that physics is applied

  const top = props.position[0];
  const left = props.position[1];
  const radius = props.radius;
  const touchId = props.id;

  const bubble = Matter.Bodies.circle(
    top, left, radius,{ label: "bubble", frictionAir: 0.005 } 
  );//circle rigid body


  Matter.World.add(props.world, bubble);

  //returns the props required in {entities}
  return {
    body: bubble, 
    touchId:{touchId},
    renderer: <Objectify/> //body & touchId will be passed on to the Objectify function.
  }
}


const styles = StyleSheet.create({
  bubble: {
    borderColor: "#fff",
    borderWidth: 4,
    backgroundColor: "skyblue",
    position: "absolute",
  }
})

export default Bubble;