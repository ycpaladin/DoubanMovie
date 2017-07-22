import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, WebView , Platform} from 'react-native';
import TWebView from '../components/TWebViewComponent';
import { connect } from 'react-redux';
import { getActorList} from '../actions/actorAction';


export default class CelebrityPage extends Component {

    render(){
        return (<TWebView uri="../html/celebrity.html"  javaScriptEnabled={true} />);
    }
}

