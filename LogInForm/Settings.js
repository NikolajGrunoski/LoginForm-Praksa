import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, Button } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import HeaderSettings from './HeaderSettings';

import bgImage from './assets/images/background.jpg';
import SlidingUpPanel from 'rn-sliding-up-panel';

export default class Settings extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    static navigationOptions = {
        header: null,
        headerStyle: {
            backgroundColor: 'transparent',
            borderBottomWidth: 0
        },
        headerTintColor: 'transparent',

    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <HeaderSettings />
            </ImageBackground>
        )
    }
}

const styles = {
    backgroundContainer: {
        flex: 2,
        width: null,
        height: null,
        flexDirection: 'row',
    },
    // text: {
    //     fontSize: 22,
    //     paddingTop: 25,
    //     paddingLeft: 20
    // },
    // header: {
    //     flex: 1,
    //     flexDirection: 'row',
    // },
}