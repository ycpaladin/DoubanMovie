import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect} from 'react-redux';
import { getMovieList } from '../actions/movieActions';
import MovieListComponent from './MioveListComponent';

class HotMovieList extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMovieList());
    }

    render(){
        const { hot, isFetching, navigation,dispatch} = this.props;
        return (<MovieListComponent data={hot} isFetching={isFetching} navigation={navigation} onRefresh={
            ()=>{
                 dispatch(getMovieList());
            }
        }/>)
    }
}


export default connect(({movieReducer})=> movieReducer)(HotMovieList);
