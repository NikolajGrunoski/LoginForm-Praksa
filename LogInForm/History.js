import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem, FlatList } from 'react-native-elements'

import List2 from './List2';
import bgImage from './assets/images/background.jpg';


export default class History extends Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    static navigationOptions = {
        header: null,
        headerStyle: {
            backgroundColor: 'transparent',
            borderBottomWidth: 0
        },
        headerTintColor: 'transparent',

    }
    goToDatePicker = () => {
        this.props.navigation.navigate('DatePicker');
    }





    constructor(props) {
        super(props);
        this.state = {
        //   tableHead: ['Head'],
          tableData: [
            [`1. Koj bil prviot pretsedatel na Republika Makedonija? ${ <Icon name={'ios-checkmark-circle'} size={28} color={'green'}/>}`],
            ['2. Kolku kontinenti postojat?'],
            ['3. Koja godina e roden Aleksandar III Makedoniski?'],
            ['4. Koj datum se slavi Pravoslaven Bozik?'],
            ['5. Kolku godini vladee kralicata Elizabeta?'],
            ['5. Vo koj fudbalski klub igra Kristiano Ronaldo?'],
            ['5. Vo koj NBA klub igrase Pero Antic?'],
          ],

        }
    }

    render() {
        const state = this.state;
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
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
                <Grid>
                    <Section>
                        <View style={styles.container}>
                            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text3}/>
                            <Rows data={state.tableData} style={styles.tableData} textStyle={styles.text3}/>
                            </Table>
                        </View>
                    </Section>
                </Grid>



           

            </ImageBackground>
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