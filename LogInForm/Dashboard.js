import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Dimensions, View, Text, Button } from 'react-native';
import { render } from 'react-dom';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { ScreenOrientation } from 'expo';

import bgImage from './assets/images/background.jpg';
import logo from './assets/images/logo.png';



export default class Dashboard extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    // componentDidMount() {
    //     ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    //     this.setState({ dataChart: this.getData() });
    // }
    // switchToLandscape() {
    //     ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    // }

    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
            backgroundColor: '#01446E',
        },
        headerRight: (

            <TouchableOpacity>
                <Icon name={`md-settings`} style={{ color: 'rgba(255, 255, 255, 0.7)' }} size={28} />
            </TouchableOpacity>

        )
    }

    render() {

        // this.switchToLandscape();

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View >
                    <TouchableOpacity style={styles.firstField}>
                        <Icon name={'md-clipboard'} size={40} style={styles.daschIcon} />
                        <Text style={styles.textIcon}>Score:800</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.firstRow}>
                        <Icon name={'md-arrow-round-down'} size={40} style={styles.daschIcon} />
                        <Text style={styles.textIcon}>This month</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.firstRow}>
                        <Icon name={'md-clock'} size={40} style={styles.daschIcon} />
                        <Text style={styles.textIcon}>Hours Left : 3 Hours</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.backgroundField}>
                    <TouchableOpacity style={styles.secondInput}>
                        <Icon name={'ios-calendar'} size={40} style={styles.daschIcon} />
                        <Text style={styles.textIcon}>This Week</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondRow}>
                        <Icon name={'md-planet'} size={40} style={styles.daschIcon} />
                        <Text style={styles.textIcon}>Global Score</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondRow}>
                        <ImageBackground source={logo} style={styles.backgroundContainer}></ImageBackground>
                    </TouchableOpacity>

                    
                </View>

                <View>
                    <TouchableOpacity style={styles.btnPlay}>
                        <Button title='Play'></Button>
                    </TouchableOpacity>
                </View>


            </ImageBackground>

        )

    }

}



const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 2,
        width: null,
        height: null,
        flexDirection: 'row',
    },
    firstRow: {
        flex: 1,
        width: 200,
        height: 200,
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginLeft: 120,
        // marginBottom:20,
        borderColor: 'rgba(0, 0, 0, 0.35)',
        borderStyle: "solid",
        borderWidth: 4,
        borderTopWidth: 0,
        backgroundColor: '#5DBCD2',
    },
    firstField: {
        flex: 1,
        width: 200,
        height: 200,
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginLeft: 120,
        marginTop: 20,
        borderColor: 'rgba(0, 0, 0, 0.35)',
        borderStyle: "solid",
        borderWidth: 4,
        borderTopWidth: 0,
        backgroundColor: '#5DBCD2',
    },
    secondInput: {
        flex: 1,
        width: 200,
        height: 200,
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        backgroundColor: '#5DBCD2',
        marginTop: 20,
        borderColor: 'rgba(0, 0, 0, 0.35)',
        borderStyle: "solid",
        borderWidth: 4,
        borderTopWidth: 0
    },
    secondRow: {
        flex: 1,
        width: 200,
        height: 200,
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: 'rgba(0, 0, 0, 0.35)',
        borderStyle: "solid",
        borderWidth: 4,
        borderTopWidth: 0,
        backgroundColor: '#5DBCD2',

    },
    daschIcon: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 80,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    textIcon: {
     
    
    },
    btnPlay:{
        backgroundColor:'red',
        flex:3,
        flexDirection: 'column-reverse',
    },




});


