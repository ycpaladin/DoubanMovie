import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, NavigatorIOS } from 'react-native';
import MovieListComponent from '../components/MioveListComponent';
import { connect } from 'react-redux';
import { getMovieList } from '../actions/movieActions';

export default class MoviePage extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMovieList());
    }

    render() {
        // const { } = this.props;
        return (<NavigatorIOS style={style.container}
            initialRoute={{
                title: "电影",
                component: MovieListComponent,
                name: '电影'
            }}
            renderScene={(route, navigator) => {
                const Component = route.component;
                return (<Component navigator={navigator} {...route.passProps} />)
            }}>

        </NavigatorIOS>)
    }
}



const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 40
    },
    list: {
        flex: 1
    }
})