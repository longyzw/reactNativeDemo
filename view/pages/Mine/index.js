import React from 'react';
import { Text } from 'react-native'

export default class Mine extends React.Component {
    render() {
        return <Text onPress={() => this.props.navigation.navigate('P4')}>登陆</Text>
    }
}