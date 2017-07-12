import React, { Component } from 'react';
import { ListView, Text, Image,ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import SearchTextBoxComponent from '../components/SearchTextBoxComponent';
export default class MovieDetialsPage extends Component{

    static navigationOptions = ({navigation})=>({
        title:'电影',
        headerTintColor:'#fff',
        headerStyle:{  backgroundColor:'#848484', elevation:0, shadowOpacity:0,},
        headerTitleStyle:{
            alignSelf:'center'
        }
    })
    render(){
        const { title,images: { large },year,genres = [],directors,casts} = this.props.navigation.state.params;
        const _genres = [].join.call(genres,' / ');
        return (<ScrollView style={style.container}>
            <View style={style.topImage}>
                <Image source={{uri:large}} style={style.img} />
            </View>
            <View style={style.detials}>
                <View style={style.dleft}>
                    <Text style={style.title}>{title}</Text>
                    <Text>{year} / {_genres}</Text>
                    <Text>上映时间：</Text>
                    <Text>片长：</Text>
                </View>
                <View style={style.dright}>

                </View>
            </View>
            <View style={style.description}>


            </View>
            <View style={style.person}>


            </View>
        </ScrollView>)
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // marginTop:-100
        // borderWidth:1
    },
    topImage:{
        height:340,
        backgroundColor:'#848484',
        // justifyContent: 'flex-start',
        alignItems:'center',
        // borderWidth:1
    },
    
    img:{
        width:200,
        resizeMode: Image.resizeMode.contain,
        flex:1,
    },
    detials:{
        height:140,
        padding:15,
        flexDirection: 'row',
    },
    dleft:{
        flex:1,
    },
    title:{
        fontSize:20,
        color:'#000',
        marginBottom:5
    },
    dright:{
        width:150,borderWidth:1
    },
    description:{
        height:150,
        borderWidth:1
    },
    person:{
        height:100,
        borderWidth:1
    }
})