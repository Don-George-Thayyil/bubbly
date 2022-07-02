import Matter from 'matter-js';
import React from 'react'

function Drag(entities, { touches, time, dispatch }) {
    let lowestRadius = 50;
    // if (touches.length > 0) console.log("are you here?:", Object.keys(entities));
    touches.forEach(item => {
        Object.keys(entities).map(num => {
            if (num.length < 4) {
                let bubble = entities[num].body;
                
                // console.log(item.event.target)
                if (item.type === "move") {
                    let factorX = bubble.position.x - item.event.pageX;
                    let factorY = bubble.position.y - item.event.pageY;
                    if (factorX < 0) factorX = factorX * (-1);
                    if (factorY < 0) factorY = factorY * (-1);
                    if (factorY < lowestRadius&&factorX < lowestRadius) {                        
                        Matter.Body.translate(bubble, { x: item.delta.pageX, y: item.delta.pageY });
                        Matter.Body.applyForce(bubble, bubble.position, { x: item.delta.pageX / 2000, y: item.delta.pageY / 2000 })
                        // console.log(entities[num].touchId.touchId)
                    }
                }
            }
        })
    })

    let engine = entities.physics.engine;

    Matter.Engine.update(engine, time.delta);

    return entities;
}

export default Drag