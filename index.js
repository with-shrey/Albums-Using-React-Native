// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

//Import a library to help create a registerComponent
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//Create a registerComponent
// const App = () => {
//   return (
//     <Text>Some text</Text>
//   );
// };
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
