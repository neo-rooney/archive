import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'

export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView
            style={{
                flex: 1,
                flexDirection: 'column',
                // backgroundColor: 'tomato',
                justifyContent: 'center',
              }}
              behavior="padding"
            >
                
                <View style={styles.container}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'tomato',
                            marginTop: -20,
                            fontWeight: '200',
                        }}
                        >
                        CAR AUCTION
                    </Text>
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-person'}
                        placeholder={'이름'}
                    />
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-mail'}
                        placeholder={'이메일'}
                    />
                    <RoundButton
                        style={{ marginTop: 10 }}
                        title={'로그인'}
                        onPress={() => {
                            this.props.navigation.navigate("MyCarList");
                    }}
                    />
                    <RoundButton
                        style={{ marginTop: 10 }}
                        title={'회원가입'}
                        onPress={() => {
                            this.props.navigation.navigate('');
                    }}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 30,
        alignItems: 'center',
      }
})
