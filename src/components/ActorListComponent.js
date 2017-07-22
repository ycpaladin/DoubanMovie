import React, { Component } from 'react';
import { Image, View, StyleSheet,Text, PixelRatio } from 'react-native';
import { HorizontalListView} from './HorizontalListView';

export default class ActorListComponent extends Component {

    render(){
        const { data = [] }  = this.props;
        if(data === null || data === undefined) return null;
        data.push({
            avatars:{}
        })
        return (<HorizontalListView  
            data={data}
            renderRow={ this._renderRow}
            onRowPress={this._onPress.bind(this)}
            renderLinkToAll={this._renerLinkToAll}
        />);
    }


    _renderRow ({avatars:{large},name,id}){
        return (<View style={ style.row} >
                <Image source={{ uri:large}} style={style.img}/>
                <Text style={style.text} numberOfLines={1}>{ name}</Text>
            </View>)
    }

    _renerLinkToAll(){
         return (<View style={style.row} >
                <Text style={[style.text,style.all]}>查看所有演员</Text>
                <Text style={style.text}>　</Text>
            </View>)
    }

    _onPress({ id}){
         const {navigation} = this.props;
         if(id !== undefined){ //如果ID不为undefined，则跳转到显示影人的页面
            navigation.navigate('Celebrity',{id})
         }else{
             navigation.navigate('ActorList'); // 跳转到显示所有影人的页面，
         }
            
    }
}




const style  =StyleSheet.create({
    row:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        width:80,
        padding:5,
        // borderWidth:1
    },
    img:{
        flex: 1,
        // width:80,
        // height:100,
        resizeMode: Image.resizeMode.contain
    },
    text:{
        fontSize:12,
        marginTop:5,
        textAlign:'center'
    },
    all:{
        borderWidth:1/PixelRatio.get(),
        borderColor:'#ccc',
        flex:1,
        marginTop:0,
        backgroundColor:'#ccc',
        padding:15
    }
})