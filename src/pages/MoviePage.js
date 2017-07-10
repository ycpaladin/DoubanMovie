import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import HotMovieComponent from '../components/HotMovieComponent';
import UpcomingMovieList from '../components/UpcomingMovieComponent';
import TestComponent from '../components/TestComponent';
import SearchTextBoxComponent from '../components/SearchTextBoxComponent';

const tabViews = [{ title:'正在热映', component: HotMovieComponent},{ title:'即将上映', component:UpcomingMovieList }]

export default class MoviePage extends Component {

    static navigationOptions = ({nativgation})=>({
        headerStyle:{ display:'none'},
    });

    
    render() {
        const items = tabViews.map(({title,component:TComponent}, index) => 
        (<TComponent key={index} tabLabel={title} navigation={ this.props.navigation}/>));
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
                tabBarTextStyle={style.tabBarText}
               >
                {items}
            </ScrollableTabView>
        </View>)


    }
}

// export default connect(root => root.movieReducer)(MoviePage);


const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems:'flex-start'
        // borderWidth:1
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
        marginTop:13,
        fontWeight:"100"
    },
    search: {
        flex: 1
    },
    list: {
        flex: 1
    }
})