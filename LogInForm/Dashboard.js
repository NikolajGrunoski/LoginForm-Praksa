import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { render } from 'react-dom';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton, Item, headerRight } from 'react-navigation-header-buttons';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import bgImage from './assets/images/background.jpg';
import logo from './assets/images/logo.png';



export default class Dashboard extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    // componentDidMount() {
    //     ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    //     this.setState({ dataChart: this.getData() });
    // }
    // switchToLandscape() {
    //     ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    // }

    // static navigationOptions = {
    //     title: 'Dashboard',
    //     headerStyle: {
    //         backgroundColor: '#01446E',
    //     },
    //     headerRight: {

    //         <TouchableOpacity>
    //             <Icon name={`md-settings`} style={{ color: 'rgba(255, 255, 255, 0.7)' }} size={28} />
    //         </TouchableOpacity>

    //     }
    // }

    render() {

        // this.switchToLandscape();

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                
                <Grid>
                    <Section> {/* Light blue */}
                        <Block xsSize="1/1" smSize="1/2" />
                        <Block xsSize="1/1" smSize="1/2" />
                        <Block xsSize="1/1" smSize="1/2" /> 
                    </Section>
                    <Section> {/* Dark blue */}
                        <Block size="1/1" smSize="1/2" />
                        <Block size="1/1" smSize="1/2" />
                        <Block size="1/1" smSize="1/2" />
                        <Block size="1/1" smSize="1/2" />
                        <Block size="1/1" smSize="1/2" />
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
    }
    // firstRow: {
    //     flex: 1,
    //     width: 200,
    //     height: 200,
    //     flexDirection: 'column',
    //     borderRadius: 20,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     marginLeft: 120,
    //     // marginBottom:20,
    //     borderColor: 'rgba(0, 0, 0, 0.35)',
    //     borderStyle: "solid",
    //     borderWidth: 4,
    //     borderTopWidth: 0,
    //     backgroundColor: '#5DBCD2',
    // },
    // firstField: {
    //     flex: 1,
    //     width: 200,
    //     height: 200,
    //     flexDirection: 'column',
    //     borderRadius: 20,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     marginLeft: 120,
    //     marginTop: 20,
    //     borderColor: 'rgba(0, 0, 0, 0.35)',
    //     borderStyle: "solid",
    //     borderWidth: 4,
    //     borderTopWidth: 0,
    //     backgroundColor: '#5DBCD2',
    // },
    // secondInput: {
    //     flex: 1,
    //     width: 200,
    //     height: 200,
    //     flexDirection: 'column',
    //     borderRadius: 20,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     backgroundColor: '#5DBCD2',
    //     marginTop: 20,
    //     borderColor: 'rgba(0, 0, 0, 0.35)',
    //     borderStyle: "solid",
    //     borderWidth: 4,
    //     borderTopWidth: 0
    // },
    // secondRow: {
    //     flex: 1,
    //     width: 200,
    //     height: 200,
    //     flexDirection: 'column',
    //     borderRadius: 20,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     borderColor: 'rgba(0, 0, 0, 0.35)',
    //     borderStyle: "solid",
    //     borderWidth: 4,
    //     borderTopWidth: 0,
    //     backgroundColor: '#5DBCD2',

    // },
    // daschIcon: {
    //     marginTop: 30,
    //     marginBottom: 30,
    //     marginLeft: 80,
    //     color: 'rgba(255, 255, 255, 0.7)'
    // },
    // textIcon: {


    // },




});


