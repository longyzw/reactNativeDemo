import React from 'react';
import { View, Text } from 'react-native'
const { RNStatusBar } = require('@components/components')

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <RNStatusBar props={this.props} backgroundColor='green' barStyle='default' />
                <Text>登录页面</Text>
            </View>
        )
    }
}