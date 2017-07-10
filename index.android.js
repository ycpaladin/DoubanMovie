/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/configStore';
import NavComponent from './src/navigarot';

export default class Test04 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <NavComponent />
        </Provider>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  nav: {
    height:40
  }
});

AppRegistry.registerComponent('Test04', () => Test04);
