import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Calendar from 'react-native-calendar-select';

import bgImage from './assets/images/background.jpg';

export default class DatePicker extends Component {

    static navigationOptions = {
        header: null,
        headerStyle: {
            backgroundColor: 'transparent',
            borderBottomWidth: 0
        },
        headerTintColor: 'transparent',

    }
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View>
                    <View style={styles.container}>
                        <CalendarPicker
                            onDateChange={this.onDateChange}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop:50
        
    },
});