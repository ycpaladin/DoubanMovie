import React, { Component } from 'react';

import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getMovieList } from '../actions/movieActions';
class MovieListComponent extends Component {



    render() {
        const { isFetching, movies } = this.props;
        if (movies === null) return null;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (<View>
            <ListView dataSource={ds.cloneWithRows(movies)} renderRow={this._renderRow} />
        </View>)
    }


    _renderRow({ title, images: { large } }) {
        return (<View style={style.row}>
            <View style={style.left}>
                <Image source={{ uri: large }} style={style.img} />
            </View>
            <View style={style.right}>
                <Text style={style.title}>{title}</Text>
            </View>

        </View>)
    }
}
export default connect(root => root.movieReducer)(MovieListComponent);

const style = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems:'flex-start',
        padding: 5,
        height: 150,
        // borderWidth: 1,
        // borderColor:'green'
    },
    left: {
        alignSelf: 'flex-start',
        // borderWidth: 1,
        // borderColor: 'red',
        width: 90
    },
    right: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
    img: {
        flex: 1,
        resizeMode: Image.resizeMode.contain

    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        // borderWidth: 1,
        // borderColor:'red'
    }
});