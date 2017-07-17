import React, { Component } from 'react';
import { ListView, Text, Image,ScrollView, View, StyleSheet, TouchableOpacity, BackHandler,PixelRatio ,TouchableHighlight} from 'react-native';
// import SearchTextBoxComponent from '../components/SearchTextBoxComponent';
import RatingComponent from '../components/RatingComponent';
import ActorListComponent from '../components/ActorListComponent';
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

        const { title, images:{large}, genres, year,rating,ratings_count ,countries,original_title,durations,summary,casts,directors} = movie[id];
        const _array = [year,...countries,...genres];
        const _genres = [].join.call(_array,' / ');
        return (<ScrollView style={style.container}>
            <View style={style.topImage}>
                <Image source={{uri:large}} style={style.img} />
            </View>
            <View style={style.detials}>
                <View style={style.dleft}>
                    <Text style={style.title}>{title}</Text>
                    <Text>{_genres}</Text>
                    <Text>原名：{original_title}</Text>
                    <Text>上映时间：{}</Text>
                    <Text>片长：{durations}</Text>
                </View>
                <View style={style.dright}>
                    <Text style={style.ratingTitle}>豆瓣评分</Text>
                    <Text style={style.rating}>{rating.average.toFixed(1)}</Text>
                    <RatingComponent {...rating}/>
                    <Text style={style.ratingTitle}>{ratings_count}人</Text>
                </View>
            </View>
            <View style={style.btns}>
                <TouchableHighlight style={ style.leftBtn}>
                    <Text style={style.textInBtn}>想看</Text>
                </TouchableHighlight>
                <TouchableHighlight style={ style.rightBtn}>
                    <Text style={style.textInBtn}>看过</Text>
                </TouchableHighlight>
            </View>
            <View style={style.buy}>
                <TouchableHighlight>
                    <View style={{ flexDirection:'row'}}>
                        <Text style={style.buytitle}>选座购票</Text>
                        <Text style={style.price}>￥33起</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={style.description}>
                <Text>剧情简介</Text>
                <Text>
                    {summary}
                </Text>
            </View>
            <View style={style.person}>
                <ActorListComponent data={[...directors,...casts]}/>

            </View>
        </ScrollView>)
    }
}

export default connect(root=>root.movieDetailsReducer)(MovieDetailsPage);

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#fff'
        // marginTop:-100
        // borderWidth:1
    },
    topImage:{
        height:340,
        backgroundColor:'#848484',
        alignItems:'center',
    },
    ratingTitle:{
        color:'#848484',
        fontSize:12,
        textAlign:'center'
    },
    rating:{
        fontSize:20,
        color:'#000',
        textAlign:'center',
        height:25,
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
        width:150,
        padding:12,
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#848484',
        shadowOpacity: 1,
        borderWidth: 1 / PixelRatio.get(),
        shadowRadius: 5
        // borderWidth:1
    },
    description:{
        // height:150,
        margin:10,
        paddingTop:10,
        paddingBottom:20,
        // borderWidth:1 / PixelRatio.get(),
    },
    person:{
        height:120,
        // borderWidth:1 / PixelRatio.get(),
        marginBottom:15,
    },
    btns:{
        height:80,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        
    },
    leftBtn:{
        width:80,
        height:30,
        backgroundColor:'#fff',
        borderWidth:1 / PixelRatio.get(),
        alignItems:'center',
        justifyContent: 'center',
        marginRight:5,
        borderColor:'#ea9518',
        borderRadius:5
    },rightBtn:{
        flex:1,
        height:30,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth:1 / PixelRatio.get(),
        marginLeft:5,
         borderColor:'#ea9518',
         borderRadius:5
    },
    textInBtn:{
        fontSize:12,
         color:'#ea9518',
    },
    buy:{
        height:25,
        borderBottomWidth:1 / PixelRatio.get(),
        marginLeft:10,
        marginRight:10,
        borderColor:'#848484'
    },buytitle:{
        fontSize:12,

    },price:{
        flex:1,
        color:'red',
        fontSize:12,
        textAlign:'right'
    }

})