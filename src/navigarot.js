
import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import TabNavigaror, { Item } from 'react-native-tab-navigator';
import MoviePage from './pages/MoviePage';


export default class NavComponent extends Component {

    render() {
        return (<TabNavigaror>
            <TabNavigaror.Item selected={true} title="电影"
                renderIcon={() => <Image source={require('./images/movie.png')} style={style.icon}/>}
                onPress={() => this._onPress.bind(this)}>
                <View style={style.container}>
                    <MoviePage />
                </View>
            </TabNavigaror.Item>
            <TabNavigaror.Item title="找片"
                renderIcon={() => <Image source={require('./images/eye.png')}  style={style.icon}/>}
                onPress={() => this._onPress.bind(this)}>
                <View style={style.container}>

                </View>
            </TabNavigaror.Item>
            <TabNavigaror.Item title="我的"
                renderIcon={() => <Image source={require('./images/my.png')}  style={style.icon}/>}
                onPress={() => this._onPress.bind(this)}>
                <View style={style.container}>

                </View>
            </TabNavigaror.Item>

        </TabNavigaror>)
    }

    _onPress() {

    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 25,
        height:25
    }
})