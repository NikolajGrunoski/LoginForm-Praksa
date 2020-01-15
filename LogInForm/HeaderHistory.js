import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { List, ListItem, FlatList } from 'react-native-elements'
import { Grid, Section, Block } from 'react-native-responsive-layout';


class HeaderHistory extends Component {
    render () {
        return (
            <Grid>
                <Section>
                    <View style={[styles.header, { backgroundColor: '#c3defe' }, { height: 80 }, { width: "100%" }]}>
                        <Text style={styles.text}>Questions History</Text>
                        <TouchableOpacity style={styles.dateBtn} onPress={this.goToDatePicker}>
                            <Block size={100}>
                                <View style={styles.element}>
                                    <Text style={styles.text2}>Select Date</Text>
                                </View>
                            </Block>
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
    text2: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    dateBtn: {
        paddingLeft: 150,
        marginTop: 30
    },
    element: {
        backgroundColor: '#4e9dfc',
        borderRadius: 15,
        height: 30,
        width: 150,
        alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
    },
    text3: {
        margin: 6,
        fontSize: 16,
        fontWeight: '500'
    },
    tableData: {
        backgroundColor: 'white',
    }

});

export default HeaderHistory;