import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, AsyncStorage, Keyboard, Easing, FlatList, ScrollView, InteractionManager, TouchableOpacity, } from 'react-native';

//Styles
import styles from './styles';

//Component
import DrawerComponent from '../../modules/drawer';

//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/userAction'

//UI
import { Title, TextInput, Button, Text, Caption, View as ViewShoutem, NavigationBar, Image, Divider, Subtitle, Spinner, } from '@shoutem/ui';
import { TimingDriver, FadeIn, SlideIn, HeroHeader } from '@shoutem/animation';
import Icon from 'react-native-vector-icons/FontAwesome';





function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}


class Login extends Component {
  static navigationOptions = { title: 'Login', header: null };

  constructor(props) {
    super(props);
    this.state = {
      interactionsComplete: false
    }
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
          this.setState({interactionsComplete: true});
    });
  }

  render() {
      const driver = new TimingDriver({ duration: 700 });
      driver.runTimer(1);
      const drawerStyles = {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#fff'},
        main: {paddingLeft: 3},
      }
      return (
         
       <View style={styles.container}>
            <StatusBar
              backgroundColor="rgb(255, 204, 1)"
              barStyle="light-content"
            />
            <NavigationBar
              leftComponent={<TouchableOpacity onPress={() => this._drawer.open()} style={{padding: 10}}><Icon name="bars" style={{color: '#e5b700'}} /></TouchableOpacity>}
              centerComponent={<Title>DUMMY</Title>}
            />
        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
        >
            {this.state.interactionsComplete ?
            <View>
              
            </View>
            : 
            <View style={styles.spinnerContainer}>
              <Spinner />
            </View>
          }
          </ScrollView>
        </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);