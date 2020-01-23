import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';


class HeaderSettings extends Component {
    render() {
        return (
            <Grid>
                <Section>
                    <View style={[styles.header, { backgroundColor: '#c3defe' }, { height: 80 }, { width: "100%" }]}>
                        <Text style={styles.text}>Settings</Text>


                    </View>
                </Section>
            </Grid>
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
    header: {
        flex: 1,
        flexDirection: 'row',
    },


});

export default HeaderSettings;