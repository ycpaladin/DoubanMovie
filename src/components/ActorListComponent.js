import React, { Component } from 'react';
import { Image, View, StyleSheet,Text, ListView,TouchableOpacity,PixelRatio } from 'react-native';


export default class ActorListComponent extends Component {

    render(){

        const { data = [] }  = this.props;
        const items = data.map(({id,name},index)=>
             (<Text key={id}>{name}</Text>)
        );
        if(data === null || data === undefined) return null;
        data.push({
            avatars:{}
        })
        const ds = new ListView.DataSource({ rowHasChanged:(r1,r2)=> r1 !== r2});
        return (<ListView 
            horizontal={true}
            dataSource={ds.cloneWithRows(data)}
            renderRow={ this._renderRow.bind(this)}

        />);
    }


    _renderRow ({avatars:{large},name,id}){
        if(large === undefined){
            return this.renerLinkToAll();
        }
        return (<TouchableOpacity onPress={this._onPress.bind(this, id)}>
            <View style={ style.row} >
                <Image source={{ uri:large}} style={style.img}/>
                <Text style={style.text} numberOfLines={1}>{ name}</Text>
            </View>
        </TouchableOpacity>)
    }

    _onPress(id){
        console.log(id)
    }

    renerLinkToAll(){
         return (<TouchableOpacity onPress={this._onPress.bind(this, undefined)}>
            <View style={ [style.row]} >
                <Text style={[style.text,style.all]}>查看所有演员</Text>
                <Text style={style.text}>　</Text>
            </View>
        </TouchableOpacity>)
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