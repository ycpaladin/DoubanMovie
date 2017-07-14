import React, { Component } from 'react';
import { ListView, Text, Image,ScrollView, View, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
// import SearchTextBoxComponent from '../components/SearchTextBoxComponent';
import RatingComponent from '../components/RatingComponent';
import { getMovieDetailsById,initMovieDetails } from '../actions/movieActions';
import {connect} from 'react-redux';

class MovieDetailsPage extends Component{

    static navigationOptions = ({navigation})=>({
        title:'电影',
        headerTintColor:'#fff',
        headerStyle:{  backgroundColor:'#848484', elevation:0, shadowOpacity:0,},
        headerTitleStyle:{
            alignSelf:'center'
        }
    })

    // constructor(props){
    //     super(props);
    //     this._onBack = this._onBack.bind(this);
    // }


    componentDidMount(){
        // const { } = this.props;
        const {dispatch,navigation:{state:{ params:{id}} }, movie } = this.props;
        if(this.props.movie[id] === undefined ){
            dispatch(getMovieDetailsById(id));
        }
        
        // BackHandler.addEventListener('hardwareBackPress',this._onBack)
    }

    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress',this._onBack)
    // }

    // _onBack (){
    //     const {dispatch,navigation:{state:{ params:{id}} } } = this.props;
    //     console.log(id,'=====>')
    //     dispatch(initMovieDetails());
    // }

    render(){
        const { isFetching, movie,navigation:{state:{ params:{id}} } } = this.props;
        if(isFetching === true ||  movie[id] === undefined) {
            return null;
        }

        const { title, images:{large}, genres, year,rating } = movie[id];
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
                    <RatingComponent {...rating}/>
                </View>
            </View>
            <View style={style.description}>


            </View>
            <View style={style.person}>


            </View>
        </ScrollView>)
    }
}

export default connect(root=>root.movieDetailsReducer)(MovieDetailsPage);

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
        width:150
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