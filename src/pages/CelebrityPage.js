import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, WebView, Platform } from 'react-native';
// import TWebView from '../components/TWebViewComponent';
import { connect } from 'react-redux';
import { getCelebrityById } from '../actions/celebrityAction';


class CelebrityPage extends Component {

    componentDidMount() {
        const { getCelebrity, navigation: { state: { params: { id } } } } = this.props;
        getCelebrity(id);
    }

    render() {
        const { isFetching, celebrity, error } = this.props;
        if (isFetching === true || error === true) return null;
        let source;
        if (__DEV__) {
            source = require('../html/celebrity.html');
        } else {
            source = Platform.OS === 'ios' ? require('../html/celebrity.html') : { uri: 'file:///android_asset/celebrity.html' };
        }
        return (<WebView source={source} javaScriptEnabled={true} />);
    }
}


export default connect(({ celebrityReducer }) => celebrityReducer, dispatch => ({
    getCelebrity(id){
        dispatch(getCelebrityById(id));
    }
}))(CelebrityPage);
