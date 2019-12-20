import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Dimensions, View } from 'react-native';
import { render } from 'react-dom';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { ScreenOrientation } from 'expo';

import bgImage from './assets/images/background.jpg';



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
                <View style={styles.firstRow}>
                    <TouchableOpacity style={styles.formOne}>
                        <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.formOne}>
                        <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.formOne}>
                        <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.secondtRow}>

                    <TouchableOpacity style={styles.formTwo}>
                        <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.formTwo}>
                        <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.formTwo}>
                        <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
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
        //   alignItems: 'strech',
        // justifyContent:'space-evenly',

        flexDirection: 'row',
        // flexWrap: 'wrap'

    },
    firstRow: {
        flex: 2,
        width: null,
        height: null,
        flexDirection: 'column',
        // flexWrap: 'wrap'
    },
    secondtRow: {
        flex: 2,
        width: null,
        height: null,
        flexDirection: 'column',
        // flexWrap: 'wrap'
    },
    formOne: {
        width: 100,
        height: 110,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    formTwo: {
        width: 100,
        height: 110,
        borderRadius: 20,
        backgroundColor: 'black',
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

});


