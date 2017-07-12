import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class FetchingComponent extends Comment{

    render(){
        return <View style={style.container}>
            <Image source={require('../images/fetching.png')} style={style.fetching}/>
        </View>
    }
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    fetching:{
        width:25,
        height:25
    }
});