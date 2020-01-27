import React, { Component } from 'react';
import { View, } from 'react-native';
import { List, ListItem, FlatList, } from 'react-native-elements';



goToQuestion = () => {
    this.props.navigation.navigate('Question');
}

// static navigationOptions = {
//     header:null,
//     headerStyle: {   
//         backgroundColor: 'transparent', 
//         borderBottomWidth: 0
//     },
//     headerTintColor: 'transparent',

// }

const list = [
    {

        title: '1. Koj bil prviot pretsedatel na Republika Makedonija?',
        // icon: 'av-timer'
    },
    {
        title: '2. Kolku kontinenti postojat?',
        // icon: 'flight-takeoff'
    },
    {
        title: '3. Koja godina e roden Aleksandar III Makedoniski?',
        // icon: 'flight-takeoff'
    },
    {
        title: '4. Koja data se proslavuva Pravoslaven Bozik?',
        // icon: 'flight-takeoff'
    },
    {
        title: '5. Kolku godini vladee kralicata Elizabeta?',
        // icon: 'flight-takeoff'
    },
    {
        title: '6. Za koj fudbalski klub igra Kristiano Ronaldo?',
        // icon: 'flight-takeoff'
    },
    {
        title: '7. Vo koj NBA klub igrase Pero Antic?',
        // icon: 'flight-takeoff'
    },
]


class TableQuestions extends Component {

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{ name: item.icon }}
                            bottomDivider
                            chevron
                            onPress={() => this.props.navigation.navigate('Question')}

                        />
                    ))
                }
            </View>

        )
    }
}

export default TableQuestions;

