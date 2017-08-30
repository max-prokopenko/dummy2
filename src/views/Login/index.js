import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, AsyncStorage, Keyboard, Easing  } from 'react-native';

//Styles
import styles from './styles';


//Modules
import { Auth } from '../../modules/auth';


//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/userAction'

//UI
import { Title, TextInput, Button, TouchableOpacity, Text, Caption, View as ViewShoutem, } from '@shoutem/ui';
import { TimingDriver, FadeIn, SlideIn, HeroHeader } from '@shoutem/animation';
import Hash from 'sha256';


function mapStateToProps(state) {
  return {
    test: 'test'
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
      email: '',
      password: ''
    }
  }
  signup = () => {
    const { navigate } = this.props.navigation;
    navigate('Signup');
  }
  login = () => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    Auth(data, this.props);
    Keyboard.dismiss();
  }
  render() {
      // const driver = new TimingDriver({ duration: 700 });
      // driver.runTimer(1);
      return (
       <View style={styles.container}>
          <StatusBar
            backgroundColor="rgb(255, 204, 1)"
            barStyle="light-content"
          />
          <View style={styles.backgroundImage}>
              <View style={styles.overlay}>
              </View>
              <View>
                <Title styleName="h-center bold bright">MEALBEAT</Title>
                <View style={styles.inputContainer}>
                  <TextInput 
                    placeholder={'Email'}
                    onChangeText={(text) => this.setState({email: text})}
                    underlineColorAndroid='rgba(255,255,255, 0.6)'
                    style={{backgroundColor: 'transparent', color: '#4B4B4B', width: 300}} 
                    placeholderTextColor='#ffffff'
                  />
                  <TextInput 
                    placeholder={'Password'}
                    onChangeText={(text) => this.setState({password: text})}
                    underlineColorAndroid='rgba(255,255,255, 0.6)'
                    style={{backgroundColor: 'transparent', color: '#4B4B4B', width: 300}}
                    placeholderTextColor='#ffffff'
                    secureTextEntry
                  />
                </View>
                <ViewShoutem styleName="horizontal" style={{margin: 15, marginTop: 40}}>
                  <Button styleName="confirmation" onPress={this.login}>
                    <Text>LOGIN</Text>
                  </Button>

                </ViewShoutem>
              </View>
          </View>
        </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);