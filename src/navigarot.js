
import React, { Component } from 'react';
import { View, StyleSheet,Image, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import color from './config/color';
import MoviePage from './pages/MoviePage';
import FindPage from './pages/FindPage';
import MinePage from './pages/MinePage';
import MovieDetailsPage from './pages/MovieDetailsPage';


const lightContentScenes = ['Home', 'My'];


function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

export default class NavComponent extends Component {
    constructor() {
        super()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
   
}



const TabScreen = TabNavigator({
        Movie:{
            screen:MoviePage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'热映',
                tabBarIcon:({ focused,tintColor})=>(<Image source={require('./images/movie.png')} style={style.icon}/>)
            })
        },
        Find:{
            screen:FindPage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'找片',
                tabBarIcon:({ focused,tintColor})=>(<Image source={require('./images/eye.png')} style={style.icon}/>)
            })
        },
        My:{
            screen:MinePage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'我的',
                tabBarIcon:({ focused,tintColor})=>(<Image source={require('./images/my.png')} style={style.icon}/>)
            })
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false, // 左右滑动的时候不切换
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            // activeBackgroundColor:'red',
            inactiveTintColor: '#ccc',
            style: { backgroundColor: '#ffffff' },
        },
    });


const Navigator = StackNavigator({
      Tab:{ 
          screen:TabScreen,
        },
        Detials:{
            screen:MovieDetailsPage
        }
    },
   
    {
        navigationOptions:{
            headerBackTitle:null,
            // headerTintColor:'#fff',
            showIcon:true
        }
    });


const style = StyleSheet.create({
    icon: {
        width: 25,
        height:25,
        // backgroundColor:'red'
    }
});