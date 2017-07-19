import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getActorList} from '../actions/actorAction';


class ActorListPage extends Component {

    componentDidMount(){
        const { dispatch }  =this.props;
        dispatch(getActorList());
    }

    render(){
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
        const { data = []} = this.props;
        const _d = {}, sectionIdentities = [], rowIdentities = [];

        data.forEach(({type, users}, index)=>{
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
        dataSource={ ds.cloneWithRowsAndSections(_d,sectionIdentities, rowIdentities) }
        renderRow={ this._renderRow.bind(this)}
        showsVerticalScrollIndicator={true}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={this._renderHeader.bind(this)}
        />)
    }

    _renderRow({ id, avatar, name},sectionId, rowId){
        // const rows = rowData.map(({ id,name,avatar},index)=>{
        //     return (<View  style={style.row} key={id}>
        //         <Image source={ {uri:avatar}}  style={style.img}/>
        //         <Text style={style.text}>{name}</Text>
        //     </View>)
        // });
        
        return (<View  style={style.row} key={id}>
                <Image source={ {uri:avatar}}  style={style.img}/>
                <Text style={style.text}>{name}</Text>
            </View>)
    }

    _renderHeader({type, length},sectionId,rowId){
        return (<View style={style.header}>
            <Text>{sectionId} {length}</Text>
        </View>)
    }
}

const style = StyleSheet.create({
    header:{
        height:40,
        paddingLeft:10,
        justifyContent: 'center',
        backgroundColor:'#ccc'
    },
    row:{
        paddingLeft:10,
        height:150,
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:5
        //  backgroundColor:'red'
        // marginBottom:10,
    },
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#fff',
        // justifyContent: 'flex-start',
        // alignItems:'flex-start'
    },
    img:{
        // flex:1,
        width:100,
        resizeMode: Image.resizeMode.contain,
    },
    text:{
        flex:1,
        marginLeft:10
    }
})


export default connect(({actorReducer})=> actorReducer)(ActorListPage);