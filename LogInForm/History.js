import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem, FlatList } from 'react-native-elements'

import TableQuestions from './Table';
import HeaderHistory from './HeaderHistory';
import bgImage from './assets/images/background.jpg';



export default class History extends Component {
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
    goToDatePicker = () => {
        this.props.navigation.navigate('DatePicker');
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <HeaderHistory />
                <TableQuestions />
            </ImageBackground>
        )
    }

}




const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    text: {
        fontSize: 22,
        paddingTop: 25,
        paddingLeft: 20
    },
    text2: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    dateBtn: {
        paddingLeft: 150,
        marginTop: 30
    },
    element: {
        backgroundColor: '#4e9dfc',
        borderRadius: 15,
        height: 30,
        width: 150,
        alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
    },
    text3: {
        margin: 6,
        fontSize: 16,
        fontWeight: '500'
    },
    tableData: {
        backgroundColor: 'white',
    }

});