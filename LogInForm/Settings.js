import React, { Component } from 'react';
import { View } from 'react-native';
import { ScreenOrientation } from 'expo';
import HeaderSettings from './HeaderSettings';
import BodySettings from './BodySettings';



export default class Settings extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
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
            <View style={styles.background} >
                <HeaderSettings />
                <BodySettings />
            </View>

        )
    }
}

const styles = {
    backgroundContainer: {
        flex: 2,
        width: null,
        height: null,
        backgroundColor:'white'
    },
    background: {
        backgroundColor: '#005BA1',
        width: '100%',
        height: '100%',
        
    }

}