import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import bgImage from './assets/images/background.jpg';

export default class Question extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    static navigationOptions = {
        header:null,
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
                    <Section style={styles.question}>
                        <Block>
                            <View>
                                <Text style={styles.questionTxt}>Koj e prviot pretsedatel na Republika Makedonija?</Text>
                            </View>
                        </Block>
                        
                    </Section>
                </Grid>

                <Grid horizontal>

                    <Section style={styles.answers}>
                        <Block>
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' },
                                {width:300}, {height:50},{marginBottom:15}]}>
                                <TouchableOpacity>
                                    <Text style={styles.text}>A. Boris Trajkovski</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>
                        <Block >
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' }, 
                                {width:300}, {height:50},{marginBottom:15}]}>
                                <TouchableOpacity>
                                    <Text style={styles.text}>B. Kiro Gligorov</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>
                    </Section>

                    <Section style={styles.answers2}>
                        <Block>
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' },
                                {width:300}, {height:50},{marginBottom:15}]}>
                                <TouchableOpacity>
                                    <Text style={styles.text}>C. Branko Crvenkovski</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>
                        <Block>
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' },
                                {width:300}, {height:50},{marginBottom:15}]}>
                                <TouchableOpacity>
                                    <Text style={styles.text}>D. Gorgi Ivanov</Text>
                                </TouchableOpacity>
                            </View>
                        </Block>

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
    answers: {
        flex: 1,
        flexDirection: 'row',
        marginTop:0,
        marginLeft:20
    },
    answers2: {
        flex: 1,
        flexDirection: 'row',
    },
    question: {
        margin:80,
        width:500,
        height:50,
        backgroundColor:'transparent',
        borderRadius:8,  
    },
    questionTxt:{
        padding:15,
        paddingLeft:10,
        color:'white',
        fontWeight:'bold',
        fontSize: 20, 
    },
    text: {
        padding:15,
        color:'white',
        fontWeight:'bold',
        fontSize: 16
    }
});