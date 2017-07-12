import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect} from 'react-redux';
import { getUpcomingMovieList } from '../actions/movieActions';
import MovieListComponent from './MioveListComponent';

class UpcomingMovieList extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getUpcomingMovieList());
    }


    render(){
        const { upcoming, isFetching, navigation,dispatch} = this.props;
        return (<MovieListComponent data={upcoming} isFetching={isFetching}  navigation={navigation} onRefresh={()=> dispatch(getUpcomingMovieList())}/>)
    }
}


export default connect(({movieReducer})=> movieReducer)(UpcomingMovieList);
