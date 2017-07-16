import React, { Component } from 'react';
import { Image, View, StyleSheet,Text } from 'react-native';


export default class ActorListComponent extends Component {

    render(){

        const { data = [] }  = this.props;
        const items = data.map(({id,name},index)=>
             (<Text key={id}>{name}</Text>)
        )
        return (<View style={style.constainer}>
        {items}
        </View>)
    }
}

const style  =StyleSheet.create({
    constainer:{
        flex:1
    }
})