import React from 'react';
import { View, Text } from 'react-native'
import { RNStatusBar } from '@components/components'

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <RNStatusBar backgroundColor='green' barStyle='default' />
                <Text>登录页面</Text>
            </View>
        )
    }
}