import Matter from 'matter-js';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Objectify = (props) => {
  // console.log(props)
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - width/2;
  const yBody = props.body.position.y - height/2;
  
  return (
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


function Bubble(props) {

  const top = props.position[0];
  const left = props.position[1];
  const radius = props.radius;
  const touchId = props.id;

  const bubble = Matter.Bodies.circle(
    top, left, radius,{ label: "bubble" }
  );


  Matter.World.add(props.world, bubble);


  return {
    body: bubble,
    pos: { top, left },
    touchId:{touchId},
    renderer: <Objectify/>
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