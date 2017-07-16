
import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';


export default class RatingComponent extends Component{

    render() {
        // max 最高分， min=最低分， average=平均分 ，stars=stars
        const {max,min,average =  1,stars} = this.props;
        const starCount = (+(average.toFixed(0))) / 2;
        const images = [1,2,3,4,5].map((item, index)=>{
            if(item > starCount){
                if(item - starCount === 0.5){
                    return (<Image key={index} style={style.img} source={ require('../images/star1.png')}/>); //半星
                }else{
                    return (<Image key={index} style={style.img} source={ require('../images/star3.png')}/>); // 空星
                }
            }else{
                return (<Image key={index} style={style.img} source={ require('../images/star2.png')}/>); 
            }
        });
        return (<View style={style.container}>
            {images}
        </View>)
    }
}

const style = StyleSheet.create({
    container:{
        height:30,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    img:{
        width:15,
        height:15,
        
    }
})