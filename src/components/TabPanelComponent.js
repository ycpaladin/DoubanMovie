
import React, { Component } from 'react';
import { ListView, Text, Image, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export class TabPanelComponent extends Component {

    constructor(props) {
        super(props);



        this.state = {
            selectedIndex: this.getSelectedIndex()
        }
    }

    // shouldComponentUpdate(props, { selectedIndex}) {
    //     return selectedIndex !== this.state.selectedIndex;
    // }

    getSelectedIndex() {
        const { children } = this.props;
        let selectedIndex = 0;
        for (let i = 0; i < children.length; i++) {
            const { selected } = children[i];
            if (selected === true) {
                selectedIndex = i;
                break;
            }
        }

        return selectedIndex;
    }

    render() {
        const { style, children } = this.props;
        const { selectedIndex } = this.state;
        console.log('==>',selectedIndex)

        const tabs = React.Children.map(children, ({ props: { selected, title } }, index) => {
            return (<View style={[styles.tabItem,selectedIndex === index ? styles.tabItemSelected : { }]}>
                <Text
                    style={[styles.itemText, selectedIndex === index ? styles.itemTextSelected : {}]}
                    onPress={this._onPress.bind(this, index)}>{title}</Text>
            </View>);
        });


        const contents = React.Children.map(children, ({ props: { selected, component: TComponent } }, index) => {
            return (<View>
                <TComponent />
            </View>);

            // StyleSheet.Style.
            // return selectedIndex === index ? <TComponent /> : null;
        });
        // let TComponent = null;
        // React.Children.forEach(children, ({ props: { selected, component } }, index) => {
        //     if (selectedIndex === index) {
        //         TComponent = component;
        //     }
        // })
        return (
            <View style={style || styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerWarrp}>
                        {tabs}
                    </View>
                </View>
                <View style={[styles.content]}>
                    {contents}
                </View>
            </View>)
    }

    _onPress(index) {
        this.setState({
            selectedIndex:index
        })
    }
}

export class TabItem extends Component {
    static PropTypes = {
        title: React.PropTypes.string.isRequired,
        component:React.PropTypes.element.isRequired
    }
    render() {
        return  null
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
    },
    header: {
        height: 45
    },
    content: {
        flex: 1,
        // borderRightWidth: 1
    },

    headerWarrp: {
        flex: 1,
        flexDirection: 'row',
    },

    tabItem: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tabItemSelected: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    itemText: {
        textAlign: 'center',
        color: '#ccc',
        fontSize:16
    },
    itemTextSelected: {
        color: '#000'
    },
    itemContent: {
        display: 'none'
    }
});