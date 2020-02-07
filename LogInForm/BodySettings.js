import React, { Component } from "react";
import { Alert, StyleSheet, TouchableOpacity, View, Text, Switch, Picker, Button, TouchableHighlight, Modal, navigation } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { db } from './Database';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from './App';


let addItem = settings => {
    db.ref('/settings').push({
        notification: settings,
        theme: settings,
        // language: settings
    });
};

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

    goToApp = () => {
        this.props.navigation.navigate('App');

    }
    toggleSwitch = (value) => {
        this.setState({ notification: !this.state.notification });
        db.ref('/settings').push({
            notification: !this.state.notification,
        });
    }
    toggleSwitch1 = (value) => {
        this.setState({ theme: !this.state.theme });
        db.ref('/settings').push({
            theme: !this.state.theme
        });
    }
    handleSubmit() {
        Alert.alert('Settings Saved');
        // Alert.alert(this.state.notification);
        // Alert.alert(this.state.theme);
    };



    constructor(props) {
        super(props),
            this.state = {
                notification: true,
                theme: false,
                pickerSelection: 'Default value!',
                pickerDisplayed: false
            }
    }

    setPickerValue(newValue) {
        // this.setState({ language: !this.state.language });
        this.setState({
            pickerSelection: newValue
        })

        this.togglePicker();
        // db.ref('/settings').push({
        //     language: !this.state.language
        // });
    }

    togglePicker() {
        // this.setState({ language: !this.state.language });
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed
        })
        // db.ref('/settings').push({
        //     language: !this.state.language
        // });
    }

    setupButtonsListenr(userId) {
        firebase.database().ref('settings/' + userId).on('value', (snapshot) => {
            const notification = snapshot.val().notification;
            console.log("New high score: " + notification);
        });
    }

    render() {
        const pickerValues = [
            {
                title: 'English',
                value: 'english'
            },
            {
                title: 'Macedonian',
                value: 'macedonian'
            },
            {
                title: 'Serbian',
                value: 'serbian'
            },
            {
                title: 'French',
                value: 'french'
            },
            {
                title: 'German',
                value: 'german'
            }
        ]
        // export function updateNotification(notification, updateComplete) {
        //     notification.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        //     console.log("Updating food in firebase");

        //     firebase.firestore()
        //         .collection('settings')
        //         .doc(food.id).set(notification)
        //         .then(() => updateComplete(notification))
        //         .catch((error) => console.log(error));
        // }
        function storeButtons(userId, score) {
            firebase.database().ref('settings/' + userId).set({
                notification: true
            });
        }

     
        return (
            <Grid >
                <Section>
                    <View style={styles.container} >
                        <Text style={styles.text}>Notification</Text>
                        <Switch
                            style={styles.switchBtnOne}
                            onValueChange={this.toggleSwitch}
                            value={this.state.notification} />
                        <Text style={styles.text}>{this.state.notification ? ' ON' : ' OFF'}</Text>
                    </View>
                </Section>

                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Chose a language</Text>
                        <View style={styles.choseBtn}>
                            <Button onPress={() => this.togglePicker()} title={"Chose"} style={styles.text} />

                            <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
                                <View style={{
                                    margin: 20, padding: 20,
                                    backgroundColor: '#efefef',
                                    bottom: 20,
                                    left: 20,
                                    right: 20,
                                    alignItems: 'center',
                                    position: 'absolute'
                                }}>
                                    <Text>Please chose a language</Text>
                                    {pickerValues.map((value, index) => {
                                        return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                            <Text>{value.title}</Text>
                                        </TouchableHighlight>
                                    })}
                                    <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                        <Text style={{ color: '#999' }}>Cancel</Text>
                                    </TouchableHighlight>
                                </View>
                            </Modal>
                        </View>
                    </View>

                </Section>

                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Change Theme</Text>
                        <Switch
                            style={styles.switchBtnTwo}
                            onValueChange={this.toggleSwitch1}
                            value={this.state.theme} />
                        <Text style={styles.text}>{this.state.theme ? ' Red' : ' Blue'}</Text>
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
                    <TouchableOpacity style={styles.logBtn} onPress={() => navigation.navigate('App')}>
                        <Block size={180}>
                            <View style={styles.element}>
                                <Text style={styles.textBtn}>Logout</Text>
                            </View>
                        </Block>
                    </TouchableOpacity>

                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="white"
                        onPress={this.handleSubmit}>
                        <Text style={styles.textBtn}>Save</Text>
                    </TouchableHighlight>


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
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1

    },
    switchBtnOne: {
        marginLeft: 130,
        borderRadius: 5,
        borderColor: '#c3defe'
    },
    switchBtnTwo: {
        marginLeft: 95,
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
        color: 'white'
    },
    textBtn: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 5,
        color: 'white',
        fontWeight: 'bold'
    },
    element: {
        backgroundColor: '#d61c0f',
        borderRadius: 5,
        height: 40,
        marginTop: 40,
        marginLeft: 20
    },
    logBtn: {
        paddingTop: 10,
    },
    choseBtn: {
        paddingLeft: 70,

    },
    button: {
        backgroundColor: '#006AB8',
        borderRadius: 5,
        height: 40,
        width: 140,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 20,
    },


    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },

});

export default BodySettings
