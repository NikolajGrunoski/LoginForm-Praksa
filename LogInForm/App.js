import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,Dimensions, TouchableOpacity, Linking } from 'react-native';
import Dashboard from './Dashboard';
import Question from './Question';
import History from './History';
import DatePicker from './DatePicker';
import Settings from './Settings';
// import TableQuestions from './Table'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import bgImage from './assets/images/background.jpg';
import logo from './assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';


const { width: WIDTH } = Dimensions.get('window')

class App extends React.Component {

  static navigationOptions = {
    header: null
  }

  goToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>Welcome!</Text>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.goToDashboard}>

          <Icon name={'logo-facebook'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />

          <Text style={styles.text}>Log in with Facebook</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLoginGoogle} onPress={() => {
          Linking.openURL(
            'https://mail.google.com/mail/u/0/')
        }}>
          <Icon name={'logo-google'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
          <Text style={styles.text}>Log in with Gmail</Text>
        </TouchableOpacity>

      </ImageBackground>

    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Dashboard: {
    screen: Dashboard
  },
  Question: {
    screen: Question
  },
  History: {
    screen: History
  },
  DatePicker: {
    screen: DatePicker
  },
  // TableQuestions: {
  //   screen: TableQuestions
  // }
  Settings: {
    screen: Settings
  }
});

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 250,
    height: 100
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 15
  },
  btnLoginGoogle: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#de5246',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  },

});


export default createAppContainer(AppNavigator);




