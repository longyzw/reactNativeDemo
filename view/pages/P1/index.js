import React from 'react';
import { Text } from 'react-native'

const L = val => $L.t(val)

export default class P1 extends React.Component {
    render() {
        return <Text onPress={() => this.props.navigation.navigate('P3')}>{L('lang')}</Text>
    }
}