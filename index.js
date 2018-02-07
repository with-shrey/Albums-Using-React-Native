// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

//Import a library to help create a registerComponent
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a registerComponent
// const App = () => {
//   return (
//     <Text>Some text</Text>
//   );
// };
const App = () => (

    <Text>Shrey text</Text>
  );


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
