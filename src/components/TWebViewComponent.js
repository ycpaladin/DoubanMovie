
import React, { Component } from 'react';
import { WebView,Platform} from 'react-native';
import path from 'path';


export default class TWebView extends Component{

    render() {
        return (<WebView {...this.props} source={ getSourceUri(this.props.uri) }>
           
        </WebView>)
    }
}

function getSourceUri(originUri){
    if(Platform.OS === 'ios'){
        return require(originUri);
    }else{
        const fileName = path.parse(originUri).base;
        return { uri: `file:///android_asset/${fileName}`};
    }
}