import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//axios to make HTTP request
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    //default state
    state = { albums: [] };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
                .then(response => this.setState({ albums: response.data }));       
        console.log('componentDidMount in log');
    }
    
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} data={album} />
        );
    }
    
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>    
        );
    }
}


export default AlbumList;
