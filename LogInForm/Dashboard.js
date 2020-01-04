import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { render } from 'react-dom';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import App from './App';
// import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButton, Item, headerRight } from 'react-navigation-header-buttons';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';


import bgImage from './assets/images/background.jpg';
import logo from './assets/images/logo.png';



export default class Dashboard extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    goToQuestion = () => {
        this.props.navigation.navigate('Question');
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
                <Grid>
                    <Section style={styles.selectBtn}>
                        <Block xsSize="1/2" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#c3defe' },
                            { borderRadius: '5' }, { height: 130 }, { marginBottom: 10 }, { marginRight: 10 }]}>
                                <Text style={styles.text}>Score : 500</Text>
                            </View>
                        </Block>
                        <Block xsSize="1/3" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' }, { marginRight: 10 }]}>
                                <Text style={styles.text2}>Weekly Score: 700</Text>
                            </View>
                        </Block>
                        <Block xsSize="1/3" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#02326b' }, { borderRadius: '5' }, { marginBottom: 10 }]}>
                                <Text style={[styles.text2, styles.textLight]}>Monthly Score : 1050</Text>
                            </View>
                        </Block>

                        <Block xsSize="1/3" smSize="1/4">
                            <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: '5' }]}>
                                <Text style={styles.text3}>Global Score : 2053</Text>
                            </View>
                        </Block>

                    </Section>

                    <Section style={styles.playBtn}>
                        <TouchableOpacity style={styles.btnLogin} onPress={this.goToQuestion}>
                            <Block size={500}>
                                <View style={[styles.element, { backgroundColor: '#4e9dfc' }, { borderRadius: 20 }]}>
                                    <Text style={styles.text}>Play</Text>
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
    container: {
        // backgroundColor: 'black',

    },
    // btnLogin: {
    //     width:  90,
    //     height: 70,
    //     borderRadius: 45,
    //     backgroundColor: 'red',
    //     justifyContent: 'center',
    //     marginTop: 20,
    //     marginBottom: 15
    // },
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
        // paddingTop:10,
        marginLeft: 100,
        justifyContent: 'center'
    },
    playBtn: {
        height: 60,
        marginBottom: 15,
        marginLeft: 78,

    },




});




