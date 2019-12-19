import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, Linking, Button } from 'react-native';
import { render } from 'react-dom';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';



export default class Dashboard extends React.Component {

    static navigationOptions = {
        title: 'Dashboard',
        headerStyle:{
            backgroundColor: '#01446E',
        },
        headerRight:(
            
            <TouchableOpacity>
                <Icon name={`md-settings`} style={{color:'rgba(255, 255, 255, 0.7)'}} size={28} />
            </TouchableOpacity>
            
        )
    }

    render() {
        return (
            <View>
                <Text>hiii</Text>
            </View>
        )
    
    }

}

 
 








// const styles = StyleSheet.create({
//     settingsBtn: {
//         color: 'rgba(255, 255, 255, 0.7)',
//         fontSize: 16,
//         marginRight: 15
//     },
// })

// export default createAppContainer(AppNavigator);


