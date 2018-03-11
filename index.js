
/* import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App); */

//Import
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Component
const App = () => (
        <View>
            <Header headerText={'New Albums'} /> 
            <AlbumList />
        </View>
    );

//Render
AppRegistry.registerComponent('albums', () => App);

console.disableYellowBox = true;
