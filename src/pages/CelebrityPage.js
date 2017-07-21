import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, WebView , PixelRatio} from 'react-native';
import { connect } from 'react-redux';
import { getActorList} from '../actions/actorAction';


export default class CelebrityPage extends Component {
    render(){
        return (<WebView source={{uri: 'file:///android_asset/celebrity.html'}} javaScriptEnabled={true} />);
    }
}