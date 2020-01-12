import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';

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
                <Grid>
                    <Section>
                        <View style={[styles.header, { backgroundColor: '#c3defe' }, { height: 80 }, { width: "100%" }]}>
                           
                            <View>
                            <Text style={styles.text}>Questions History</Text>
                            <TouchableOpacity style={styles.dateBtn} onPress={this.goToDatePicker}>
                                <Block size={200}>
                                    <View style={styles.element}>
                                        <Text >Select Date</Text>
                                    </View>
                                </Block>
                            </TouchableOpacity>
                            </View>


                        </View>
                    </Section>

                </Grid>
               
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
    dateBtn: {
        paddingLeft: 300,

    },
    element: {
        backgroundColor: '#4e9dfc',
        borderRadius: 15,
    },
    header: {
       
        
    }

});