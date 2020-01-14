import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, Icon } from 'react-native';
import { List, ListItem, FlatList } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },

]

export default class List2 extends Component {

    render() {
        return (
            <List containerStyle={{ marginBottom: 20 }}>
                {
                    list.map((l) => (
                        <ListItem
                            roundAvatar
                            avatar={{ uri: l.avatar_url }}
                            key={l.name}
                            title={l.name}
                        />
                    ))
                }
            </List>
        )
    }
}




