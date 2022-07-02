import Matter from 'matter-js';
import Bubble from './bubble';
import Rect from './rect';

const generateTarget = ()=>{
    let start = 13;
    if((start -9)%10 == 0){
        start +=4;
    }else{
        start += 2;
    }
    return start;
}

export default function restart() {

    let engine = Matter.Engine.create({ enableSleeping: false,airFriction:0.5,friction:0.5 });
    let world = engine.world;
    engine.gravity.y = 0;

    return {
        physics: { engine, world },
        1:Bubble({id:"bubble1",world:world,position:[100,100],radius:55}),
        2:Bubble({id:"bubble2",world:world,position:[400,100],radius:70}),
        // 3:Rect({world:world})
    }
}