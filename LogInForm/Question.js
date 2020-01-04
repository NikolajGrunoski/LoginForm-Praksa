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
            position: 'absolute',
            backgroundColor: 'transparent', 
            
            borderBottomWidth: 0
        },
        headerTintColor: 'transparent',
     
  
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Grid horizontal>
                    <Section style={styles.prasanje}>
                        <Block>
                            <View>
                                {/* <Text>Koj e prviot pretsedatel na Republika Makedonija?</Text> */}
                            </View>
                        </Block>
                        
                    </Section>
                  

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
        flex: 3,
        width: null,
        height: null,
        // flexDirection: 'row',
    },
    answers: {
        flex: 1,
        flexDirection: 'row',
        marginTop:200,
        marginLeft:20
    },
    answers2: {
        flex: 1,
        flexDirection: 'row',
        marginTop:200
    },
    prasanje: {
        display:'flex',
        justifyContent:'center'
    },
    text: {
        padding:5,
        color:'white',
        fontWeight:'bold',
        fontSize: 16
    }
});