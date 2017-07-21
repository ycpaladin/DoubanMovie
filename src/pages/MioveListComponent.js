import React, { Component } from 'react';

import { ListView,RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import MovieItemComponent from './MovieItemComponent';

export default class MovieListComponent extends Component {

    static propTypes = {
        onRefresh: React.PropTypes.func.isRequired
    }
    
    render() {
        const { isFetching, data , onRefresh} = this.props;
        if (data === null || data === undefined) return null;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <ListView 
                dataSource={ds.cloneWithRows(data)} 
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl 
                        refreshing={ isFetching}
                        title="loading..."
                        onRefresh={onRefresh}
                    />
                }

            />
        )
    }
    
    _renderRow(itemData) {
        return ( <MovieItemComponent {...itemData} navigation={ this.props.navigation}/> );
    }

}
