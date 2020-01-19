import React from 'react';
import { Text } from 'react-native'

export default class Mine extends React.Component {
    render() {
        return <Text onPress={() => this.props.navigation.navigate('P2')}>示例</Text>
    }
}