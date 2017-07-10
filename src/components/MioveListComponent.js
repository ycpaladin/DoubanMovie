import React, { Component } from 'react';

import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getMovieList } from '../actions/movieActions';
import MovieItemComponent from './MovieItemComponent';

export default class MovieListComponent extends Component {



    render() {
        const { isFetching, data } = this.props;
        if (data === null || data === undefined) return null;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <ListView dataSource={ds.cloneWithRows(data)} renderRow={this._renderRow.bind(this)} />
        )
    }
    
    _renderRow(itemData) {
        return ( <MovieItemComponent {...itemData} navigation={ this.props.navigation}/> );
    }

}
