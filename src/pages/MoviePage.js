import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getMovieList } from '../actions/movieActions';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import MovieListComponent from '../components/MioveListComponent';
import TestComponent from '../components/TestComponent';
import SearchTextBoxComponent from '../components/SearchTextBoxComponent';
import { TabPanelComponent, TabItem } from '../components/TabPanelComponent'

class MoviePage extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMovieList());
    }

    render() {
        // const { } = this.props;
        const titles = ['正在热映', '即将上映', '不会上映'];
        const items = titles.map((title, index) => (<MovieListComponent key={index} tabLabel={title} />))

        return (<View style={style.container}>
            <View style={style.header}>
                <View style={style.location}>

                </View>
                <View style={style.search}>
                    <SearchTextBoxComponent />
                </View>
            </View>
            <ScrollableTabView
                style={style.container}
                tabBarActiveTextColor="#000"
                tabBarTextStyle={style.tabBarText}>
                {items}
            </ScrollableTabView>
        </View>)


    }
}

export default connect(root => root.movieReducer)(MoviePage);


const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        height: 54,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',

    },
    location: {
        width: 60,
        // borderWidth:1
    },
    tabBarText: {
        marginTop:13
    },
    search: {
        flex: 1
    },
    list: {
        flex: 1
    }
})