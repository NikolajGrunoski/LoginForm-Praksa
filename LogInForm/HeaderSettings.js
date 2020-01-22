import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { List, ListItem, FlatList } from 'react-native-elements'
import { Grid, Section, Block } from 'react-native-responsive-layout';


class HeaderSettings extends Component {


    render() {
        return (
            <Grid>
                <Section>
                    <View style={[styles.header]}>
                        <Text style={styles.text}>Questions History</Text>
                        <TouchableOpacity>
                            <Text>fuck youu</Text>
                        </TouchableOpacity>

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
        backgroundColor: '#c3defe',
        width: '100%',
        height: 80
    },

});

export default HeaderSettings;