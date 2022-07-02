import Matter from 'matter-js';
import React from 'react';
import { StyleSheet,View } from 'react-native';

const ObjectRect = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - width / 2;
    const yBody = props.body.position.y - height / 2;

    return(
        <View style={{
            width:width,
            height:height,
            position:"absolute",
            top:yBody,
            left:xBody,
            backgroundColor:"white"
        }}/>
    )

}

function Rect(props) {
    const rectangle = Matter.Bodies.rectangle(props.x, props.y, props.size.w, props.size.h);
    Matter.Body.setStatic(rectangle, true);
    Matter.World.add(props.world, rectangle);
    return {
        body: rectangle,
        renderer: <ObjectRect />
    }
}



export default Rect