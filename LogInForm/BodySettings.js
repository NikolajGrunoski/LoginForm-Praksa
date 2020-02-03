import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Switch, Picker, Button } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';

let addItem = switchBtnOne => {
    db.ref('/switchBtnOne').push({
        switchBtnOne: switchBtnOne
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
    state = { switchValue: false }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }
    goToApp = () => {
        this.props.navigation.navigate('App');
    }

    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            switchBtnTwo: e.nativeEvent.button
        });
    };
    handleSubmit = () => {
        addItem(this.state.switchBtnOne);
        Alert.alert('Item saved successfully');
    };
    cd

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
            <Grid >
                <Section>
                    <View style={styles.container} >
                        <Text style={styles.text}>Notification</Text>
                        <Switch
                            style={styles.switchBtnOne}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue} />
                        <Text style={styles.text}>{this.state.switchValue ? ' ON' : ' OFF'}</Text>


                    </View>


                </Section>
                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Chose a language</Text>
                        <View style={styles.choseBtn}>
                            <Button
                                onPress={this.onPressButton}
                                title="Chose"
                                color="white"

                            />
                        </View>

                    </View>
                </Section>
                <Section>
                    <View style={styles.container}>
                        <Text style={styles.text}>Change Theme</Text>
                        <Switch
                            style={styles.switchBtnTwo}
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
                    <TouchableOpacity style={styles.logBtn} onPress={this.goToApp}>
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

    }

});

export default BodySettings
