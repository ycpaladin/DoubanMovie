import React, { Component } from 'react';
import {ListView,TouchableOpacity,PixelRatio } from 'react-native';

export class HorizontalListView extends Component {


    render(){
        const { data = [], renderRow,  }  = this.props;
        if(data === null || data === undefined) return null;

        const ds = new ListView.DataSource({ rowHasChanged:(r1,r2)=> r1 !== r2});
        return (<ListView 
            horizontal={true}
            dataSource={ds.cloneWithRows(data)}
            renderRow={ this._renderRow.bind(this)}

        />);
    }

    _renderRow(rowData, sectionID, rowID, highlightRow){
        const {renderRow, renderLinkToAll, onRowPress = ()=>{}, data } = this.props;
        const row = parseInt(rowID) === data.length - 1 ? 
        ( renderLinkToAll !== undefined ? renderLinkToAll(rowData, sectionID, rowID, highlightRow):null ) :
        renderRow(rowData, sectionID, rowID, highlightRow);
        return (
        <TouchableOpacity onPress={()=> onRowPress(rowData)}>
            { row}
        </TouchableOpacity>
        )
    }
}