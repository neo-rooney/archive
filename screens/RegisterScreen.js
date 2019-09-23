import React, { Component } from 'react'
import { Text, StyleSheet, View , KeyboardAvoidingView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'

export default class RegisterScreen extends Component {
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
                        회원가입
                    </Text>
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-person'}
                        placeholder={'이름'}
                    />
                     <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-lock'}
                        placeholder={'비밀번호'}
                    />
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-mail'}
                        placeholder={'이메일'}
                    />
                   
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-phone-portrait'}
                        placeholder={'핸드폰번호'}
                    />
                     <RoundButton
                        style={{ marginTop: 10 }}
                        title={'등록'}
                        onPress={() => {
                            this.props.navigation.goBack(null);
                    }}
                    />
                      <RoundButton
                        style={{ marginTop: 10 }}
                        title={'취소'}
                        onPress={() => {
                            this.props.navigation.goBack(null);
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
