import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert } from 'react-native';
import { ScreenOrientation } from 'expo';
import HeaderSettings from './HeaderSettings';
import BodySettings from './BodySettings';

import Snow from 'react-native-snow';
import { db } from './Database';

let addItem = switchBtnOne => {
    db.ref('/switchBtnOne').push({
        switchBtnOne: switchBtnOne
    });
};
let addItem2 = choseBtn => {
    db.ref('/choseBtn').push({
        choseBtn: choseBtn
    });
};
let addItem3 = switchBtnTwo => {
    db.ref('/switchBtnTwo').push({
        switchBtnTwo: switchBtnTwo
    });
};




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

    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            switchBtnTwo: e.nativeEvent.button
        });
    };
    handleSubmit = () => {
        addItem(this.state.switchBtnOne);
        Alert.alert('Item saved successfully');
    };
    cd
    render() {
        return (
            <View style={styles.background} >
                <HeaderSettings />
                <BodySettings />
                {/* <View style={styles.main}>
                    <Snow />
                    <Text style={styles.title}>Add Player</Text>
                    <TextInput style={styles.itemInput} onChange={this.handleChange} />
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="white"
                        onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableHighlight>
                </View> */}
            </View>

        )
    }
}

const styles = {
    backgroundContainer: {
        flex: 2,
        width: null,
        height: null,
        backgroundColor: 'white'
    },
    background: {
        backgroundColor: '#005BA1',
        width: '100%',
        height: '100%',

    },


    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#4e9dfc'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }

}