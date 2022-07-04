# Bubbly for React-Native Projects

This is a bubbles UI, similar to the Apple Music bubble UI




https://user-images.githubusercontent.com/72986754/177131020-ab270400-ba55-40f6-9908-15594f263632.mp4



I have used react-native-game-engine and Matter.js to create this.
You can create draggable bubbles with just RNGE library. But to provide physics(collision and stuff) you have to use Matter.js library.
RNGE essentially provides an interface to include physics into the app. And physics is provided through Matter.js library.

App.js uses index.js file inside the entities folder, which uses bubbles and rect files. App.js also uses dragMechanism.js defined in Components folder as the logic part.

clone the repo.
use 
```
npm install 
npm start
```
