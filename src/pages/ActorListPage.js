import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity , PixelRatio} from 'react-native';
import { connect } from 'react-redux';
import { getActorList} from '../actions/actorAction';


// require('ErrorUtils').setGlobalHandler(function (error) {
//     console.log(error);
// })

class ActorListPage extends Component {

    static navigationOptions = ({navigation})=>({
        title:'全部影人',
        headerTintColor:'#848484',
        headerStyle:{  backgroundColor:'#fff', elevation:0, shadowOpacity:0,},
        headerTitleStyle:{
            alignSelf:'center'
        }
    })    
    componentDidMount(){
        const { dispatch }  =this.props;
        dispatch(getActorList());
    }

    render() {
        const { data = [] } = this.props;
        if (data.length === 0) return null;
        const ds = new ListView.DataSource({ 
            rowHasChanged : (r1,r2)=> r1 !== r2,
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
            getSectionHeaderData(dataBlob, sectionID){
                return dataBlob[sectionID];
            },
            getRowData(dataBlob, sectionID, rowId){
                return dataBlob[rowId];
            }
        });
       
        const _d = {}, sectionIdentities = [], rowIdentities = [];

        data.forEach(({ type, users }, index) => {
            if (index >2) {
                return;
            }
            _d[type] = { type, length: users.length}
            sectionIdentities.push(type);
            const rowId = [];
            // _d[item.type].push(...item.users);
            users.forEach((user, i)=>{
                _d[type+i] = user;
                rowId.push(type+i);
            });
            rowIdentities.push(rowId);
        })
        return (<ListView
            dataSource={ds.cloneWithRowsAndSections(_d, sectionIdentities, rowIdentities)}
            renderRow={this._renderRow.bind(this)}
            showsVerticalScrollIndicator={true}
            stickySectionHeadersEnabled={true}
            renderSectionHeader={this._renderHeader.bind(this)}
            removeClippedSubviews={false}
            initialListSize={10}

        />);
    }

    _renderRow({ id, avatar, name, enName, role }, sectionId, rowId) {
        let roleComponent = null;
        if (role !== '') {
            roleComponent = (
                <View style={style.roleView}>
                    <Text style={style.roleText}>饰   {role}</Text>
                </View>
            );
        }
        return (
                <TouchableOpacity style={style.row}  key={id} onPress={ this._onPress.bind(this, id)}>
                    <Image source={ {uri:avatar}}  style={style.img}/>
                    <View style={style.right}>
                        <Text style={style.text}>{name}</Text>
                        <Text style={[style.text]}>{enName}</Text>
                       {roleComponent}
                    </View>
                </TouchableOpacity>
            )
    }

    _onPress(id){
        const { navigation} = this.props;
        navigation.navigate('Celebrity',{id})
    }

    _renderHeader({type, length},sectionId,rowId){
        return (<View style={style.header}>
            <Text>{sectionId} {length}</Text>
        </View>)
    }
}

const style = StyleSheet.create({
    header:{
        height: 30,
        paddingLeft:10,
        flexDirection:'row',
        // justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#ccc'
    },
    row:{
        height:160,
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:15,
        marginLeft:20,
        marginRight:20,
        borderBottomWidth: 1/ PixelRatio.get(),
        borderBottomColor: '#ccc',
        overflow:'hidden'
        //  backgroundColor:'red'
        // marginBottom:10,
    },
    img:{
        // flex:1,
        width:100,
        resizeMode: Image.resizeMode.contain,
    },
    right:{
        flex:1,
        flexDirection: 'column',
        // alignItems:'flex-end',
        // justifyContent:'flex-end',
        // backgroundColor:'red',
        paddingLeft:15,
    },
    text:{
        height:30,
        // backgroundColor:'red',
        // marginLeft:10
    },
    roleView:{
        flex:1,
        justifyContent:'flex-end',
        
    },
    roleText:{
        fontSize:12
    }

   
})


export default connect(({actorReducer})=> actorReducer)(ActorListPage);