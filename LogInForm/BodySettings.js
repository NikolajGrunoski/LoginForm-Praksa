import React, { Component } from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, Switch, Picker, Button } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { BorderlessButton } from "react-native-gesture-handler";
import App from './App';

class BodySettings extends Component {

    static navigationOptions = {
        header: null
    }
    static navigationOptions = {
        header: null,
        headerStyle: {
            backgroundColor: 'transparent',
            borderBottomWidth: 0
        },
        headerTintColor: 'transparent',

    }
    state = { switchValue: false }
    toggleSwitch = (value) => {

        this.setState({ switchValue: value })
    }
    goToApp = () => {
        this.props.navigation.navigate('App');
    }

    onPressButton() {
        return (
            <View style={styles.containerLang}>

                <Text style={styles.text}>{this.state.choosenLabel}</Text>

                <Text style={styles.text}>{this.state.choosenindex}</Text>
                <Picker
                    selectedValue={this.state.choosenLabel}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ choosenLabel: itemValue, choosenindex: itemIndex })
                    }>
                    <Picker.Item label="English" value="word1" />
                    <Picker.Item label="Macedonian" value="word2" />
                    <Picker.Item label="Serbian" value="word3" />
                    <Picker.Item label="French" value="word4" />
                    <Picker.Item label="German" value="word5" />

                </Picker>
            </View>
        )
    }

    state = { choosenLabel: '', choosenindex: '' }

    render() {
        return (
            <Grid>
                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Notification</Text>
                        <Switch
                            style={styles.switchBtn}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue} />
                        <Text style={styles.text}>{this.state.switchValue ? ' ON' : ' OFF'}</Text>


                    </View>


                </Section>
                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Chose a language</Text>
                        <Button
                            onPress={this.onPressButton}
                            title="Press Me"
                            color="#841584"
                        />

                    </View>
                </Section>
                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Change Theme</Text>
                        <Switch
                            style={styles.switchBtn}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue} />
                        <Text style={styles.text}>{this.state.switchValue ? ' Red' : ' Blue'}</Text>


                    </View>


                </Section>


               
                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Version v.01.0</Text>
                       
                    </View>
                </Section>
                <Section>
                    <View style={styles.container}>
                        
                        <TouchableOpacity>
                            <Text style={styles.text}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </Section>
                <Section >
                    <TouchableOpacity  style={styles.logBtn} onPress={this.goToApp}>
                        <Block size={200}>
                            <View style={styles.element}>
                                <Text style={styles.textBtn}>Logout</Text>
                            </View>
                        </Block>
                    </TouchableOpacity>
                </Section>
            </Grid>

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
    text: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20,

    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 20
    },
    switchBtn: {
        marginLeft: 40,
        // backgroundColor:'#c3defe',
        borderRadius: 5,
        borderColor: '#c3defe'
    },
    containerLang: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color:'white'
    },
    textBtn: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop:5,
        color:'white',
        fontWeight:'bold'
    },
    element: {
        backgroundColor: '#d61c0f',
        borderRadius: 5,
        height: 40,
        marginTop: 20,
        marginLeft: 20
    },
    logBtn:{
        paddingTop:10,
       
    }

});

export default BodySettings
