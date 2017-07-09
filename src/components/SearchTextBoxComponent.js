import React, { Component } from 'react';

import { ListView, Text, Image, View, StyleSheet, TouchableOpacity ,TextInput} from 'react-native';

export default class SearchTextBoxComponent extends Component{

    render() {
        return (<View style={style.container}>
            <TextInput style={style.textBox} placeholder="电影/电视剧/影人" editable={true}/>
        </View>)
    }
}

const style = StyleSheet.create({
    container: {
        flex:1
    },
    textBox: {
        height: 30,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        paddingLeft: 10,
        paddingRight: 10,
        // backgroundImage:url('../images/find.png')
    }
})