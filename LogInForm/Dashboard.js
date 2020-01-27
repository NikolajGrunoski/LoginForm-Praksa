import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import bgImage from './assets/images/background.jpg';

export default class Dashboard extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    goToQuestion = () => {
        this.props.navigation.navigate('Question');
    }

    goToHistory = () => {
        this.props.navigation.navigate('History');
    }

    goToSettings = () => {
        this.props.navigation.navigate('Settings');
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
                <Grid>
                    <Section style={styles.selectBtn}>
                        <Block xsSize="1/2" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#c3defe' },
                            { borderRadius: '5' }, { height: 130 }, { marginBottom: 10 }, { marginRight: 10 }]}>
                                <TouchableOpacity>
                                    <Text style={styles.text}>Score : 500</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>
                        <Block xsSize="1/3" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' }, { marginRight: 10 }]}>
                                <TouchableOpacity>
                                    <Text style={styles.text2}>Weekly Score: 700</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>

                        <Block xsSize="1/3" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#02326b' }, { borderRadius: '5' }, { marginBottom: 10 }]}>
                                <TouchableOpacity>
                                    <Text style={[styles.text2, styles.textLight]}>Monthly Score : 1050</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>

                        <Block xsSize="1/3" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' }]}>
                                <TouchableOpacity>
                                    <Text style={styles.text3}>Global Score : 2053</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>

                    </Section>

                    <Section style={styles.playBtn}>
                        <TouchableOpacity onPress={this.goToQuestion}>
                            <Block size={500}>
                                <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: 20 }]}>
                                    <Text style={styles.text}>Play</Text>
                                </View>
                            </Block>
                        </TouchableOpacity>
                    </Section>



                </Grid>

                <Grid >
                    <Section style={styles.historyBtn}>
                        <TouchableOpacity onPress={this.goToHistory}>
                            <Block >
                                <View >
                                    <Text style={styles.text4}>History</Text>
                                </View>
                            </Block>
                        </TouchableOpacity>
                    </Section>

                    <Section style={styles.settingsBtn}>
                        <TouchableOpacity onPress={this.goToSettings}>
                            <Block >
                                <View >
                                    <Text style={styles.text4}>Settings</Text>
                                </View>
                            </Block>
                        </TouchableOpacity>
                    </Section>
                </Grid>

            </ImageBackground >

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
    element: {
        height: 100,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#02326b',
        fontSize: 30,
    },
    text2: {
        textAlign: 'center',
        color: '#02326b',
        fontSize: 25,
    },
    text3: {
        textAlign: 'center',
        color: '#02326b',
        fontSize: 25,
    },
    textLight: {
        color: 'white',
    },
    selectBtn: {
        flex: 1,
        flexDirection: 'column',
        width: 500,
        marginLeft: 100,
        justifyContent: 'center'
    },
    playBtn: {
        height: 60,
        marginBottom: 15,
        marginLeft: 78,
    },
    historyBtn: {
        width: 100,
        height: 100,
        backgroundColor: '#02326b',

    },
    text4: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 40,

    },
    settingsBtn: {
        width: 100,
        height: 100,
        backgroundColor: '#02326b',
        marginTop: 20

    },

});




