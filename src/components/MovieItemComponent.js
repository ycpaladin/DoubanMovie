import React, { Component } from 'react';

import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class MovieItemComponent extends Component{

    render(){
        const { title, images: { large } } = this.props;
        return (<TouchableOpacity onPress={this._onPress.bind(this)}>
            <View style={style.row}>
                <View style={style.left}>
                    <Image source={{ uri: large }} style={style.img} />
                </View>
                <View style={style.right}>
                    <Text style={style.title}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>);
    }

    _onPress()  {
        const {navigation} = this.props;
        navigation.navigate('Detials',{...this.props})
    }
}

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
})