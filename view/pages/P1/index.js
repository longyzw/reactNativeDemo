import React from 'react';
import { Text } from 'react-native'

export default class P1 extends React.Component {
    render() {
        return <Text onPress={() => this.props.navigation.navigate('P3')}>首页</Text>
    }
}