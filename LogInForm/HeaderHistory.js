import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';


class HeaderHistory extends Component {
    render() {
        return (
            <Grid>
                <Section>
                    <View style={[styles.header, { backgroundColor: '#006AB8' }, { height: 80 }, { width: "100%" }]}>
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
        paddingLeft: 20,
        color:'white'
    },
    text2: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color:'white'
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
    

});

export default HeaderHistory;