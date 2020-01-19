import React from 'react';
import { Text } from 'react-native'

const L = (...val) => $L.I(`home.index.${val[0]}`,val[1] || '')

export default class Home extends React.Component {
    render() {
        return <Text onPress={() => this.props.navigation.navigate('P1')}>{L('title', {page: 'ok',num: 'hh'})}</Text>
    }
}