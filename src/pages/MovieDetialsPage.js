import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import SearchTextBoxComponent from '../components/SearchTextBoxComponent';
export default class MovieDetialsPage extends Component{

    static navigarionOptions = ({navigation})=>({
         headerLeft:(<View style={style.location}>
                </View>),
        headerRight:(<View style={{ flex:1, width:300, paddingRight:15}}>
            <SearchTextBoxComponent />
        </View>),
        headerStyle:{  backgroundColor:'#fff'},
    })
    render(){
        const { title} = this.props.navigation.state.params;
        return (<View>
            <Text>{title}</Text>
        </View>)
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    location: {
        width: 60,
    },
    
})