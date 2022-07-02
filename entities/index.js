import Matter from 'matter-js';
import { Dimensions } from 'react-native';
import Bubble from './bubble';//bubble entity
import Rect from './rect'; //border entity (other wise bubbles will float away from screen)


const {height,width} = Dimensions.get("window");


//this function returns entities prop(as a single document{entities}), which is required in <GameEngine>
export default function restart() {

    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    engine.gravity.y = 0; //optional (default gravity should be 0)

    return {
        physics: { engine, world },
        1:Bubble({id:"bubble1",world:world,position:[100,100],radius:55}),//returns a document with necessary props
        2:Bubble({id:"bubble2",world:world,position:[250,100],radius:70}),
        7:Bubble({id:"bubble3",world:world,position:[200,100],radius:60}),
        8:Bubble({id:"bubble4",world:world,position:[150,100],radius:50}),
        9:Bubble({id:"bubble5",world:world,position:[250,300],radius:90}),
        10:Bubble({id:"bubble6",world:world,position:[100,200],radius:80}),
        11:Bubble({id:"bubble7",world:world,position:[50,200],radius:70}),
        12:Bubble({id:"bubble8",world:world,position:[150,600],radius:80}),
        13:Bubble({id:"bubble9",world:world,position:[150,500],radius:60}),
        14:Bubble({id:"bubble10",world:world,position:[350,700],radius:90}),
        15:Bubble({id:"bubble11",world:world,position:[250,400],radius:100}),
        3:Rect({x:width/2,y:height+60,world:world,size:{w:width,h:40}}),//acts as a bottom border 
        4:Rect({x:width/2,y:-60,world:world,size:{w:width,h:40}}),//acts as a top border
        5:Rect({x:-60,y:height/2,world:world,size:{w:40,h:height}}),//acts as a left border
        6:Rect({x:width+60,y:height/2,world:world,size:{w:40,h:height}}),//acts as a right border
    } //these are the entity. 
}