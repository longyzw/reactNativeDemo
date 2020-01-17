import React from 'react';
import { Text } from 'react-native'

export default class P2 extends React.Component {
    render() {
        return <Text onPress={() => this.props.navigation.navigate('P4')}>测试</Text>
    }
}