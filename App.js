import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Drag from './components/dragMechanism';
import restart from './entities';
import Bubble from './entities/bubble';


export default function App() {
  const engine = useRef(null);
  // const targeter = () => {
  //   let start = 13;
  //   let k = 1;
  //   for (let i = 0; i < 20; i++) {
  //     // if (start == 13) console.log("Startttinggg!!!:---")
  //     if ((start - 9) % 10 == 0) {
  //       start += 4;
  //     } else {
  //       start += 2;
  //     }
  //     // console.log(start)
  //   }
  // }
  // targeter();
  // console.log("it is working!!!")
  return (
    <View>
      <GameEngine
        ref={engine}
        style={styles.container}
        systems={[Drag]} //logic related stuff...
        entities={restart()} 
        //entities => {{...props,renderer:<renderingComponent>}}
        //restart => {Bubbles()} , Bubbles=>{...props,renderer}
        running={true}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
      {/* <Text>Hello there</Text> */}
    </View>

    // <View style={{
    //   borderRadius: 500,
    //   backgroundColor: "skyblue",
    //   width:100,
    //   height:100,
    //   position:"absolute",
    //   top:300,
    //   left:150
    // }}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
});
